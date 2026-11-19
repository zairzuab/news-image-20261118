// A news-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The program does no network, reads no clock and touches no file outside
// this repository, so two runs write the same bytes. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels; entry.png is 1024 by 1024
// and well under the size cap.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
