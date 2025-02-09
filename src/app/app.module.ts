import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { CommonModule } from '@angular/common';
import { FoodPageComponent } from './food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    TagsComponent,
    FoodPageComponent,
    TagsComponent



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
