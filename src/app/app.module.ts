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
import { CommonModule} from '@angular/common';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NotFoundComponent,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    TagsComponent,
    FoodPageComponent,
    TagsComponent



  ],
  providers: [],
  exports: [RouterModule, TagsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
