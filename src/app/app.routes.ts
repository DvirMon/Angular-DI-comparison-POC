import { Routes } from '@angular/router';
import { ModernSectionService } from './modern-section/modern-section.service';
import { ServiceTrackerService } from './shared/service-tracker.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'legacy-section',
    loadChildren: () => import('./legacy-section/legacy-section.module').then(m => m.LegacySectionModule)
  },
  {
    path: 'modern-section',
    providers: [ServiceTrackerService, ModernSectionService],
    children: [
      {
        path: '',
        loadComponent: () => import('./modern-section/modern-dashboard.component').then(m => m.ModernDashboardComponent)
      },
      {
        path: 'details',
        loadComponent: () => import('./modern-section/modern-details.component').then(m => m.ModernDetailsComponent)
      }
    ]
  }
];