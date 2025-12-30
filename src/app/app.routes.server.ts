import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';
import { getAllUsernames } from './data/users';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':username',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      return getAllUsernames().map((username) => ({ username: '~' + username }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
