import { Component } from '@angular/core'
import { QuizService } from '../quiz.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  constructor(
    public quizService: QuizService
  ) {}
}
