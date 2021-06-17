let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`).brotliDecompressSync(Buffer.from(`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`, `base64`)).toString();

  return patch;
}
