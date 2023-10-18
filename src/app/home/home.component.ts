import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories()
  }

  title: string = 'IFSCL Quiz'
  searchForm: any = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

  performSearch () {
    this.categoriesService.searchCategories(this.searchForm.value.search)
  }

  clearForm () {
    this.searchForm.reset()
    this.searchForm.value.search = ''
    this.categoriesService.getCategories()
  }
}
