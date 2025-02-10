import { Injectable } from '@angular/core';
import{Food} from '../../shared/models/food';
import { Tag } from '../../shared/Tag'; // Ensure the path is correct or update it

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number):Food{
  return this.getAll().find(food=>food.id==id)!;
}
  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      {name:'All', count: 10},
      {name:'Fastfood',count:5},
      {name:'Italian',count:5},
      { name:'Lunch', count: 3},
    ]
  }
  getAllFoodByTag(tag:string):Food[]{
    return  tag=="All" ?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));}

  getAll():Food[]{
    return[
     {
      id:1,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/929465840/photo/fried-rice.jpg?s=1024x1024&w=is&k=20&c=_Dopp5UQcH1v4-bJKbP5n1piYjfQnGpbBJgPn9nVf90=',
      favorite:true,
      cookTime:'30 ',
      origins:['Italy'],
      stars:5,


     },
     {
      id:2,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/908244114/photo/chinese-food-rice.jpg?s=1024x1024&w=is&k=20&c=5PMu2LRWont0i22BbZPQbonbT9clJQPrJ-AN1vzXSyk=',
      favorite:true,
      cookTime:'30',
      origins:['Italy'],
      stars:5,


     } ,
     {
      id:3,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/1394764542/photo/barley-porridge-with-minced-meat-in-bowl-on-black-board.jpg?s=1024x1024&w=is&k=20&c=2bN2eMX1U9T0BohZR3Yph4a2yrxqoVZ1Jt_2Woqk82s=',
      favorite:true,
      cookTime:'30',
      origins:['Italy'],
      stars:5,


     } ,
     {
      id:4,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/469465760/photo/buckwheat-with-meat-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=r9FtWsgROXS15J4K7UJpfzQGjbqUDaPxKrDCyZPP3zY=',
      favorite:true,
      cookTime:'30',
      origins:['Italy'],
      stars:5,


     } ,
     {
      id:5,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/1300177635/photo/bulgur-with-mushrooms-and-vegetables-in-a-bowl-on-a-dark-background-vegetarian-oriental-dish.jpg?s=1024x1024&w=is&k=20&c=XhMmFYa9viV0hwXSgnINKMi1DDXXiVnbq1d-rxa91kU=',
      favorite:true,
      cookTime:'30',
      origins:['Italy'],
      stars:5,


     } ,
     {
      id:6,
      name:'Pizza',
      price:100,
      tags:['fastfood','italian'],
      imageUrl:'https://media.istockphoto.com/id/469465760/photo/buckwheat-with-meat-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=r9FtWsgROXS15J4K7UJpfzQGjbqUDaPxKrDCyZPP3zY=',
      favorite:true,
      cookTime:'30',
      origins:['Italy'],
      stars:5,


     }
    ];
  }
}
