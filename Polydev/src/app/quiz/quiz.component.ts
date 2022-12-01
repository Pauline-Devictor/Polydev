import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [
    {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", response: false, info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2.", response: false, info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ]

  currentQuestion: number = 0;

  showInfo: boolean = false;
  showTrue: boolean = false;
  showFalse: boolean = false;

  constructor() { }

  getQuestion(): string {
    return this.questions[this.currentQuestion].question;
  }

  getInfo(): string {
    return this.questions[this.currentQuestion].info;
  }

  private getResponse(): boolean {
    return this.questions[this.currentQuestion].response;
  }

  answer(answer: boolean) {
    this.showInfo = true;
    if(this.getResponse() === answer) {
      this.showTrue = true;
    } else
      this.showFalse = true;
  }

  showNextQuestion() {
    this.showTrue = false;
    this.showFalse = false;
    this.showInfo = false;
    this.currentQuestion++;
    if(this.currentQuestion == this.questions.length)
      this.currentQuestion = 0;
  }

  ngOnInit(): void {
  }

}

export interface Question {
  question: string;
  response: boolean; //0: faux, 1: vrai
  info: string;
}
