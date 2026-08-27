(async () => {
  'use strict';
  const parts = window.__CHECKIN_PARTS || [];
  try {
    let source = '';
    if (parts.length >= 6) {
      source = parts.slice(0, 6).join('');
    } else if (parts.length === 5) {
      const middle = await Promise.all(['app-mid-04a.txt','app-mid-04b.txt','app-mid-04c.txt'].map(async name => {
        const res = await fetch(name, { cache: 'no-store' });
        if (!res.ok) throw new Error(`${name}: ${res.status}`);
        return res.text();
      }));
      source = [parts[0], parts[1], parts[2], ...middle, ...parts.slice(3)].join('');
    } else {
      throw new Error(`application parts are incomplete: ${parts.length}`);
    }
    delete window.__CHECKIN_PARTS;
    (0, eval)(source);
  } catch (err) {
    console.error(err);
    document.body.insertAdjacentHTML('afterbegin','<div style="padding:16px;background:#fee2e2;color:#7f1d1d;font-weight:700">アプリの読み込みに失敗しました。ページを再読み込みしてください。</div>');
  }
})();
