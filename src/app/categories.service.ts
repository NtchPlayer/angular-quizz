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
  currentCategory: string = ''

  getCategories() {
    return this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      this.categories = categories
    })
  }

  getCategory(id: number) {
    return this.http.get(`http://localhost:3000/categories?id=${id}`).subscribe((categories: any) => {
      this.currentCategory = categories[0].name
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
