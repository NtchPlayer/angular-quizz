import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  user: any = null
  error: boolean = false

  login(email: string | null | undefined, password: string | null | undefined) {
    this.http.get(`http://localhost:3000/users?email=${email}`).subscribe((user: any) => {
      const userData = user[0]
      if (userData && userData.password === password ) {
        this.user = userData
        localStorage.setItem('password', userData.password)
        localStorage.setItem('email', userData.email)
        this.router.navigateByUrl('/quiz')
      } else {
        this.error = true
        this.user = null
        setTimeout(() => {
          this.error = false
        }, 5000)
      }
    })
  }

  logout() {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.user = null
  }

  register(userData: any) {
    this.http.post('http://localhost:3000/users', userData).subscribe(() => {
      this.login(userData.email, userData.password)
    })
  }
}
