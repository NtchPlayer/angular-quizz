import {Component, OnInit} from '@angular/core'
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if (email) {
      this.authService.login(email, password)
    }
  }
}
