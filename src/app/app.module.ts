import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { InputFieldComponent } from './shared/input-field/input-field.component';
import { ButtonComponent } from './shared/button/button.component';
import { SvgUseComponent } from './shared/svg-use/svg-use.component';
import { SvgIconsComponent } from './shared/svg-icons/svg-icons.component';
import { IconButtonComponent } from './shared/icon-button/icon-button.component';

import { InlineSVGModule } from 'ng-inline-svg-2';
import { ConvertTimePipe } from './shared/pipes/convert-time.pipe';

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
    SvgUseComponent,
    SvgIconsComponent,
    IconButtonComponent,
    ConvertTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot({
      baseUrl: 'http://localhost:4200'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
