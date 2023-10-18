import { Component, OnInit } from '@angular/core'
import { QuizService } from '../quiz.service'
import { CategoriesService } from '../categories.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    public categoriesService: CategoriesService,
    private route: ActivatedRoute,
  ) {}

  title = 'IFSCL Quiz'
  questions: any[] = []

  quizForm: any = new FormGroup({})
  categoryID: number = 0

  checkAnswer () {
    this.quizService.checkAnswers(this.quizForm.value)
  }

  getQuestion () {
    this.quizService.getQuestions(this.categoryID).subscribe((questions: any) => {
      this.questions = questions
      for (let i = 0; i < questions.length; i++) {
        this.quizForm.addControl(questions[i].id, new FormControl('', Validators.required))
      }
    })
  }
  ngOnInit() {
    this.categoryID = Number(this.route.snapshot.paramMap.get('id'))
    this.getQuestion()
    this.categoriesService.getCategory(this.categoryID)
  }
}
