import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../../../environments/models/item';
@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;
  @Output() change = new EventEmitter();
  @Output() deletes = new EventEmitter();
  @ViewChild('checkbox') checkbox: ElementRef;
  @ViewChild('text') text: ElementRef;
  @ViewChild('submit') submitButton: ElementRef;
  @ViewChild('change') changeButton: ElementRef;


  constructor() { }

  onSubmit() {
    let id = this.item.id;
    this.item = new Item(this.text.nativeElement.value, this.checkbox.nativeElement.checked);
    this.item.id = id;
    this.lock();
    this.change.emit(this.item);

  }
  onDelete() {
    console.log("deleting");
    console.log(JSON.stringify(this.item));
    this.deletes.emit(this.item);
  }
  changes() {
    this.checkbox.nativeElement.disabled = false;
    this.text.nativeElement.disabled = false;
    this.changeButton.nativeElement.style.display = 'none';
    this.submitButton.nativeElement.style.display = 'inline-block';
  }
  lock() {
    this.checkbox.nativeElement.disabled = true;
    this.text.nativeElement.disabled = true;
    this.changeButton.nativeElement.style.display = 'inline-block';
    this.submitButton.nativeElement.style.display = 'none';

  }
  ngOnInit() {
    this.checkbox.nativeElement.checked = this.item.getChecked();
    this.lock();
  }

}
