import { Component, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';
import { Question } from './shared/question';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	, providers: [QuestionService]
})
export class AppComponent implements OnInit {
	title = 'angular-quiz';
	allQuestions: Question[] = null;
	currentQuestion: number = 0;

	constructor(
		private questions: QuestionService) { }

	ngOnInit() {
		console.log('AppComponent ngOnInit questions:', this.questions);
		// this.allQuestions = this.questions.getQuestions();
		this.allQuestions = [
			{
				caption: 'Vad heter tecknet: ;',
				answers: ['komma', 'semi', 'semikolon', 'kolon', 'semikomma'],
				correctAnswer: 2
			},
			{
				caption: 'Vad är meningen med livet?',
				answers: ['42', 'Koda', 'Backbone'],
				correctAnswer: 0
			}
		];
	}
}
