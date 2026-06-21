import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';

const outputPath = resolve('dist/index.html');
const vite = await createServer({
  appType: 'custom',
  configFile: false,
  logLevel: 'error',
  plugins: [react()],
  server: { middlewareMode: true, ws: false },
});

try {
  const template = await readFile(outputPath, 'utf8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const appHtml = render();
  const marker = '<div id="root"></div>';

  if (!template.includes(marker)) {
    throw new Error(`Prerender marker not found in ${outputPath}`);
  }

  await writeFile(
    outputPath,
    template.replace(marker, `<div id="root">${appHtml}</div>`),
  );
} finally {
  await vite.close();
}
