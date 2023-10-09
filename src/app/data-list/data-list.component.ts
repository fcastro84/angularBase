import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../interface/libraryInterface';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {
  @Input() dataList: Item[] = [];
  @Input() dataType: string = '';
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();


  ngOnInit() {

  }

  onDelete(item: Item){
    this.onItemDelete.emit(item);
  }
}
