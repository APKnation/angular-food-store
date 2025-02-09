import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchTerm:string='';
constructor(private readonly route:ActivatedRoute,private readonly router:Router){
}
ngOnInit():void{
this.route.params.subscribe(params=>{
if(params['searchTerm']){
this.searchTerm=params['searchTerm'];
}
})
}
search():void{
  if(this.searchTerm){
    this.router.navigate(['/search', this.searchTerm]);
  }
}}