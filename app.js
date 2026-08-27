(() => {
  'use strict';
  const parts = window.__CHECKIN_PARTS || [];
  delete window.__CHECKIN_PARTS;
  if (!parts.length) {
    document.body.insertAdjacentHTML('afterbegin','<div style="padding:16px;background:#fee2e2;color:#7f1d1d;font-weight:700">アプリの読み込みに失敗しました。ページを再読み込みしてください。</div>');
    return;
  }
  (0, eval)(parts.join(''));
})();
