import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  total: number = 0
  result: number = 0

  getQuestions() {
    return this.http.get('http://localhost:3000/questions')
  }

  checkAnswers(playerAnswers: any) {
    return this.http.get('http://localhost:3000/answers').subscribe((answers: any) => {
      this.total = answers.length

      for (const [key, value] of Object.entries(playerAnswers)) {
        const answerOfQuestion = answers.find((el: any) => el.questionId === parseInt(key))
        if (value === answerOfQuestion.value) {
          this.result++
        }
      }
      this.router.navigateByUrl('/result')
    })
  }

}
