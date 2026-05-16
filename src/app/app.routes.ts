import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard),
    children: [
      {
        path: 'change-detection',
        title: 'Change detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection').then(c => c.ChangeDetection)
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow').then(c => c.ControlFlow)
      },
      {
        path: 'defer-options',
        title: 'Defer options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options').then(c => c.DeferOptions)
      },
      {
        path: 'defer-views',
        title: 'Defer views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views').then(c => c.DeferViews)
      },
      {
        path: 'user/:userId',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user').then(c => c.User)
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users').then(c => c.Users)
      },
      {
        path: 'view-transition-1',
        title: 'View transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition_1').then(c => c.ViewTransition1)
      },
      {
        path: 'view-transition-2',
        title: 'View transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition_2').then(c => c.ViewTransition2)
      },
      {
        path: '**',
        redirectTo: 'change-detection'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
