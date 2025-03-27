import { writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', '.nojekyll');
writeFileSync(distPath, '');
console.log('Archivo .nojekyll creado en dist/');
