import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../../environments/models/item';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('checkbox')
  checkbox: ElementRef;
  @ViewChild('text')
  text: ElementRef;
  itemList: Item[] = [];
  tempItem: Item;
  index = 0;

  constructor() { }

  onChanges(newItem: Item) {
    console.log("lhk.h");
    this.itemList[this.indexOf(newItem)] = newItem;
  }

  indexOf(item: Item): number {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].id == item.id)
        return i;
    }
    return -1;
  }
onDeletes(item:Item){
  console.log("received");
  console.log(this.indexOf(item));
  console.log(JSON.stringify(this.itemList));
  this.itemList.splice(this.indexOf(item),1);
}
  add() {
    if (this.text.nativeElement.value == '')
      return;
      console.log(this.checkbox.nativeElement.checked);
    this.itemList.push(new Item(this.text.nativeElement.value, this.checkbox.nativeElement.checked))
    this.itemList[this.itemList.length - 1].id = this.index++;
    this.checkbox.nativeElement.checked = false;
    this.text.nativeElement.value = "";
    console.log(JSON.stringify(this.itemList));
  }

  ngOnInit() {
  }

}
