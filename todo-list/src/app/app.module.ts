import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './todo-list/list-item/list-item.component';
import {RouterModule, Routes} from "@angular/router";
import { ShopComponent } from './shop/shop.component';
import { SearchBarComponent } from './shop/search-bar/search-bar.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductOneComponent } from './shop/product-one/product-one.component';
import { ProductListItemComponent } from './shop/product-list/product-list-item/product-list-item.component';

const routes:Routes=[
  {path:'',component:TodoListComponent},
  {path:'shop',component:ShopComponent, children:[
    {path:'product/:id',component:ProductOneComponent},
    {path:'productlist',component:ProductListComponent}
  ]} 
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListItemComponent,
    ShopComponent,
    SearchBarComponent,
    ProductListComponent,
    ProductOneComponent,
    ProductListItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
