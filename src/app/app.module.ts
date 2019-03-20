import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnswerOptionComponent } from './answer-option/answer-option.component';
import { QuestionService } from './shared/question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
