import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/questions')
      .subscribe((data) => {
        this.questions = data
      })
  }

  title: string = 'IFSCL Quiz';

  questions: any = []

  checkAnswer () {
    console.log('test')
  }
}
