/* Access gate - XAUUSD Robot.
 *
 * Every "get the algo" link used to drop people straight into the request form, even if
 * they had never opened a broker account, which is the step the algo is actually free
 * with. This asks first: already have an XS account through our link, or not yet.
 *
 * It intercepts the links rather than replacing them, so the React hero, both navbars
 * and all 60 static pages behave the same, and the plain link still works if this
 * script never runs.
 */
(function () {
  'use strict';
  var FORM = 'https://get.xauusdrobot.com/get/xauusd-robot';
  var XS = 'https://my.xs.com/links/go/5382';
  var box = null;

  function build() {
    if (box) return box;
    box = document.createElement('div');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-labelledby', 'ag-title');
    box.style.cssText =
      'position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;' +
      'padding:20px;background:rgba(5,7,10,.78);backdrop-filter:blur(3px)';
    box.innerHTML =
      '<div class="ag-card" style="max-width:460px;width:100%;background:#151922;border:1px solid #2a3140;' +
      'border-top:2px solid #e8b53a;border-radius:12px;padding:28px 26px;' +
      'font-family:\'DM Sans\',ui-sans-serif,system-ui,\'Segoe UI\',sans-serif;color:#e6e8ee;' +
      'box-shadow:0 24px 60px -20px rgba(0,0,0,.8)">' +
      '<div style="font-family:ui-monospace,Consolas,monospace;font-size:11px;letter-spacing:.14em;' +
      'text-transform:uppercase;color:#e8b53a;margin-bottom:10px">Step 1 of 2</div>' +
      '<h2 id="ag-title" style="margin:0 0 10px;font-family:\'Playfair Display\',Georgia,serif;font-size:24px;' +
      'font-weight:700;line-height:1.2;color:#e6e8ee">Do you already have an XS account?</h2>' +
      '<p style="margin:0 0 22px;font-size:14.5px;line-height:1.6;color:#9aa3b2">' +
      'The algo is free because the broker pays us, not you. We check the account number against the ' +
      'partner report before sending the licence key and the file.</p>' +
      '<div style="display:flex;flex-direction:column;gap:10px">' +
      '<a class="ag-yes" href="' + FORM + '" target="_blank" rel="noopener" ' +
      'style="display:block;text-align:center;padding:13px 18px;border-radius:6px;font-weight:700;font-size:14px;' +
      'letter-spacing:.04em;text-decoration:none;background:linear-gradient(90deg,#a87c2a,#e8b53a,#f5d78a);color:#0d0f14">' +
      'YES &mdash; OPEN THE REQUEST FORM</a>' +
      '<a class="ag-no" href="' + XS + '" target="_blank" rel="noopener noreferrer sponsored nofollow" ' +
      'style="display:block;text-align:center;padding:13px 18px;border-radius:6px;font-weight:600;font-size:14px;' +
      'letter-spacing:.04em;text-decoration:none;border:1px solid rgba(63,181,106,.45);color:#3fb56a">' +
      'NO &mdash; OPEN MY XS ACCOUNT &rarr;</a>' +
      '</div>' +
      '<button class="ag-close" type="button" aria-label="Close" ' +
      'style="margin:18px auto 0;display:block;background:none;border:0;color:#6b7385;font-size:12.5px;cursor:pointer">' +
      'Close</button>' +
      '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      if (e.target === box || (e.target.className || '').toString().indexOf('ag-close') > -1) close();
    });
    box.querySelector('.ag-yes').addEventListener('click', close);
    box.querySelector('.ag-no').addEventListener('click', close);
    return box;
  }

  function open() {
    build().style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
    var first = box.querySelector('.ag-yes');
    if (first) first.focus();
  }

  function close() {
    if (box) box.style.display = 'none';
    document.documentElement.style.overflow = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // catch every link to the request form, wherever it is rendered
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    if (a.href.indexOf('get.xauusdrobot.com') === -1) return;
    if (a.hasAttribute('data-no-gate')) return;
    e.preventDefault();
    open();
  }, true);

  window.XRAccessGate = { open: open, close: close };
})();
