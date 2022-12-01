import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import {InfosComponent} from "./infos/infos.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuizComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
