import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyServicingComponent } from './policy-servicing/policy-servicing.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent},
  { path: 'policyservicing', component: PolicyServicingComponent},
  { path: 'policies', component: PoliciesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
