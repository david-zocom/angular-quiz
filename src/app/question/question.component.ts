import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../shared/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	@Input() question: Question;
	chosenOptions: string[] = [];
	points: number = 0;

	constructor() { }

	ngOnInit() { }

	handleToggleAnswer(option: string) {
		if( this.chosenOptions.find(x => x === option) ) {
			this.chosenOptions = this.chosenOptions.filter(x => x !== option);
		} else {
			this.chosenOptions.push(option);
		}
		console.log('parent component, du valde ' + option, this.chosenOptions);
	}

	submitAnswer() {
		let correct = this.question.answers[this.question.correctAnswer];
		let points = 0;
		if( this.chosenOptions.find(x => x === correct) ) {
			points += 10;
		}
		points -= 3 * this.chosenOptions.length;
		this.points = points;
	}
}







//
