import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LegacyDashboardComponent } from './legacy-dashboard.component';
import { LegacyDetailsComponent } from './legacy-details.component';
import { LegacySectionService } from './legacy-section.service';
import { ServiceTrackerService } from '../shared/service-tracker.service';

const routes: Routes = [
  {
    path: '',
    component: LegacyDashboardComponent
  },
  {
    path: 'details',
    component: LegacyDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ServiceTrackerService, 
    LegacySectionService]
})
export class LegacySectionModule { }