(() => {
  'use strict';
  const TOTAL = 12;
  function fail() {
    document.body.insertAdjacentHTML('afterbegin','<div style="padding:16px;background:#fee2e2;color:#7f1d1d;font-weight:700">アプリの読み込みに失敗しました。ページを再読み込みしてください。</div>');
  }
  function boot() {
    const parts = window.__CHECKIN_PARTS || [];
    if (parts.length !== TOTAL) return fail();
    delete window.__CHECKIN_PARTS;
    try { (0, eval)(parts.join('')); } catch (e) { console.error(e); fail(); }
  }
  function load(i) {
    if (i > TOTAL) return boot();
    const script = document.createElement('script');
    script.src = `app-part-${String(i).padStart(2,'0')}.js`;
    script.onload = () => load(i + 1);
    script.onerror = fail;
    document.head.appendChild(script);
  }
  const existing = (window.__CHECKIN_PARTS || []).length;
  if (existing >= TOTAL) boot(); else load(existing + 1);
})();
