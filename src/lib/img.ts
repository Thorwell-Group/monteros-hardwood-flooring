import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Every photo wider than 1000px in public/images has an 800px sibling
// (`name-800.webp`). Hand phones the small one; desktops still get the full
// file. Returns undefined when no variant exists so callers fall back to src.
export function srcsetFor(src: string): string | undefined {
  if (!src.startsWith('/images/') || !src.endsWith('.webp')) return undefined;
  const small = src.replace(/\.webp$/, '-800.webp');
  if (!existsSync(join(process.cwd(), 'public', small))) return undefined;
  return `${small} 800w, ${src} 1600w`;
}
