import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {

	constructor() { }

	getQuestions(): Question[] {
		return [
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
