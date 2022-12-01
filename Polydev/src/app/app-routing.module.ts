import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import {InfosComponent} from "./infos/infos.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo:'/home', pathMatch:'full'},
  {path: "quiz", component: QuizComponent},
  {path:"infos", component:InfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
