import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { CategoryButtonComponent } from './category-button/category-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckboxComponent,
    QuestionComponent,
    HeaderComponent,
    ButtonComponent,
    RegisterComponent,
    LoginComponent,
    InputFieldComponent,
    QuizComponent,
    ResultComponent,
    CategoryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
