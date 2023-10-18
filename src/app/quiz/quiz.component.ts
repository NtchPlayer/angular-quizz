import { Component, OnInit } from '@angular/core'
import { QuizService } from '../quiz.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  title = 'IFSCL Quiz'
  questions: any[] = []

  quizForm: any = new FormGroup({})

  checkAnswer () {
    this.quizService.checkAnswers(this.quizForm.value)
  }

  getQuestion () {
    this.quizService.getQuestions().subscribe((questions: any) => {
      this.questions = questions
      for (let i = 0; i < questions.length; i++) {
        this.quizForm.addControl(i, new FormControl('', Validators.required))
      }
    })
  }
  ngOnInit() {
    this.getQuestion()
  }
}