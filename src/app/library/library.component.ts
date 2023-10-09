import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../interface/libraryInterface';
import { DataFormComponent } from '../data-form/data-form.component';
import { DataListComponent } from '../data-list/data-list.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, DataFormComponent, DataListComponent],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

  Book: string = 'Book';
  Song: string = 'Song';
  itemsBook: Item[] = [];
  itemsSong: Item[] = [];

  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item: Item) {
    if(item.totalTime){
      this.itemsSong.push(item)
    } else{
      this.itemsBook.push(item)
    }
    
  }


  onItemDelete(item:  Item) {

    if(item.totalTime){
      let index = this.itemsSong.findIndex((element) => element === item, 0 );
      this.itemsSong.splice(index, 1) ;
     
    } else{
      let index = this.itemsBook.findIndex((element) => element === item, 0 );
      this.itemsBook.splice(index, 1);
    }
  }
}
