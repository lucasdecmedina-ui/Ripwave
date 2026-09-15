import assert from 'node:assert/strict';
import app from '../.vercel/output/functions/__server.func/index.mjs';

// Exercise the compiled Vercel handler, not the development server.
for (const [path, status] of [
  ['/', 200],
  ['/pranchas', 200],
  ['/pranchas/shortboards', 200],
  ['/pranchas/shortboards/the-rip-1', 200],
  ['/cuidados', 200],
  ['/pagina-inexistente', 404],
]) {
  const response = await app.fetch(new Request(`https://ripwave.test${path}`), {
    waitUntil() {},
  });
  assert.equal(response.status, status, path);
  const html = await response.text();
  assert.ok(html.includes('Ripwave'), `${path}: missing rendered content`);
  console.log(`${response.status} ${path}`);
}
