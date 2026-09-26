import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------
// Cal.com embed — shared loader
// ---------------------------------------------------------------------------
// Loaded once via the official script-tag snippet (no npm package needed).
// Any component that needs Cal.com (inline calendar, popup button, floating
// button) should call useCalEmbedScript() — window.Cal queues calls even
// before the actual script has finished loading, so call order across
// components doesn't matter.
// Docs: https://cal.com/docs/enterprise-features/embed

declare global {
  interface Window {
    Cal?: any;
  }
}

let scriptInitStarted = false;

function initCalScript() {
  if (scriptInitStarted) return;
  scriptInitStarted = true;

  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            // @ts-ignore
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal!('init', { origin: 'https://cal.com' });
  window.Cal!('ui', {
    theme: 'dark',
    styles: {
      branding: { brandColor: '#fcc171' },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });

  // Safety net for the mobile "stuck scrolling" bug: some mobile browsers
  // don't fully clean up the inline overflow/position lock Cal's modal puts
  // on <body> when it closes. __closeIframe fires whenever the popup is
  // dismissed (X button, backdrop tap, or a completed booking), so force a
  // reset here regardless of whether Cal's own cleanup ran. It also
  // broadcasts a plain DOM event so other components (e.g. the mobile nav
  // menu) can react to the popup closing without us wiring their state in
  // here directly.
  window.Cal!('on', {
    action: '__closeIframe',
    callback: () => {
      requestAnimationFrame(() => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('height');
        document.documentElement.style.removeProperty('overflow');
      });
      window.dispatchEvent(new Event('cal:embed-closed'));
    },
  });
}

/** Ensures the Cal.com embed script is loaded/queued. Safe to call from
 * multiple components — the actual init only runs once. */
export function useCalEmbedScript() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initCalScript();
    setReady(true);
  }, []);

  return ready;
}

/** Opens a Cal.com booking flow as a modal popup on top of the current page. */
export function openCalModal(calLink: string) {
  initCalScript();
  window.Cal?.('modal', {
    calLink,
    config: { layout: 'month_view' },
  });
}

export const CAL_LINKS = {
  videoCall: 'moinaktarshaikh/15min'
};
