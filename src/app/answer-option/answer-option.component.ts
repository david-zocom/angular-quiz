import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-option',
  templateUrl: './answer-option.component.html',
  styleUrls: ['./answer-option.component.css']
})
export class AnswerOptionComponent implements OnInit {
	@Input() option: string;
	@Output() toggleAnswer: EventEmitter<string> = new EventEmitter<string>();

	constructor() { }
	ngOnInit() { }

	onClick() {
		console.log('Child component, du valde: ' + this.option);
		this.toggleAnswer.emit(this.option);
	}
}




//
