import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/Tag'; // Ensure this path is correct
import { RouterModule } from '@angular/router'; // Import RouterModule here



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  imports: [RouterModule],  // Import RouterModule here for routerLink to work

  styleUrls: ['./tags.component.css']  // Fixed property name
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private readonly foodServices: FoodService) { }

  ngOnInit(): void {
    // Ensure getAllTags() returns an array of Tag objects
    this.tags = this.foodServices.getAllTags();
  }
}
