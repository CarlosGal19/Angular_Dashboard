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
        path: 'view-transition',
        title: 'View transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition').then(c => c.ViewTransition)
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
