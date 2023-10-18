import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { QuizComponent } from './quiz/quiz.component'
import { ResultComponent } from './result/result.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'quiz/:id',
  component: QuizComponent
}, {
  path: 'result',
  component: ResultComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
