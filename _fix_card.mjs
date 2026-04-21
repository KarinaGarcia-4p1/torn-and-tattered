import { readFileSync, writeFileSync } from 'fs';

const files = [
  { path: 'index.html', logoSrc: './assets/images/LOGO_FOOTER.png' },
  { path: 'es/index.html', logoSrc: '../assets/images/LOGO_FOOTER.png' },
];

for (const { path, logoSrc } of files) {
  let h = readFileSync(path, 'utf8');

  // 1. Update card div: bigger padding, flex layout
  h = h.replace(
    'border-radius:14px;padding:32px 36px;display:inline-block;min-width:260px;max-width:100%;box-sizing:border-box;box-shadow:0 8px 28px rgba(0,0,0,0.22)',
    'border-radius:14px;padding:36px 40px;display:inline-flex;align-items:center;gap:32px;max-width:100%;box-sizing:border-box;box-shadow:0 8px 28px rgba(0,0,0,0.22)'
  );

  // 2. Insert logo before the <ul>
  const ulMarker = '<ul style="list-style:none;padding:0;margin:0;color:#fff;font-size:0.88em;line-height:1.4">';
  const logoTag = `<img src="${logoSrc}" alt="Torn and Tattered" style="width:70px;flex-shrink:0;opacity:0.95">\n\t\t\t\t\t`;
  h = h.replace(ulMarker, logoTag + ulMarker);

  // 3. Increase margin-bottom from 15px to 18px on the li items
  h = h.replace(/margin-bottom:15px/g, 'margin-bottom:18px');

  writeFileSync(path, h, 'utf8');
  console.log('Done:', path);
}
