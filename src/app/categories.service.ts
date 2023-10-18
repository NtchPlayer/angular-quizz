import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private http: HttpClient
  ) {}

  categories: any = []

  getCategories() {
    return this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      this.categories = categories
    })
  }

  searchCategories(search?: string) {
    let searchQuery = ''
    if (search) {
      searchQuery = `?name_like=${search.toLowerCase()}`
    }

    return this.http.get(`http://localhost:3000/categories${searchQuery}`).subscribe((categories: any) => {
      this.categories = categories
    })
  }
}
