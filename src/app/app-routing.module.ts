import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'screening',
    loadChildren: () => import('./screening/screening.module').then( m => m.ScreeningPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'expert',
    loadChildren: () => import('./expert/expert.module').then( m => m.ExpertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
