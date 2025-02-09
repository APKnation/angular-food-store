import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  foods:  Food[]=[];
constructor(private readonly foodServices:FoodService, private readonly route:ActivatedRoute){
  
}
ngOnInit():void{
  this.route.params.subscribe(params=>{

      if(params['searchTerm'])
        this.foods=this.foodServices.getAllFoodsBySearchTerm(params['searchTerm']);
else if(params['tag'])
      this.foods=this.foodServices.getAllFoodByTag(params['tag']);
      
      else
        this.foods=this.foodServices.getAll();
      
    });
}}
