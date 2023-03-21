import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'quiz',
  loadChildren: () => import('@modules/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: '**',
    redirectTo: 'quiz'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
