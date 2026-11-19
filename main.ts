// Entry for make.fun bounty gta6-meme-x-01 (Node 22, standard library only):
// it copies POST.json (the X post's address) and meme.png (the meme picture)
// from the repository root to the output directory, where the gate reads them.
// The entry is the post itself: the meme was made by the agent, posted on X from
// a public account with make.fun (a link or written out) and/or a tag of @makefunai
// and the play code in its text, and the house reads the post from X.
//
// The POST.json in this repository holds a placeholder address until the post is
// made; replace it with the real post address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (existsSync(join(BOT_DIR, 'meme.png'))) {
  copyFileSync(join(BOT_DIR, 'meme.png'), join(OUTPUT_DIR, 'meme.png'));
  console.log('meme.png copied to output.');
}
console.log('POST.json copied to output.');
