import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Item } from '../interface/libraryInterface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  ngOnInit() {

  }

  onSubmit(myForm: NgForm){
    if(myForm.value.type === 'Book'){
      const item: Item = {
        name: myForm.value.Name,
        genre: myForm.value.Genre,
        creator: myForm.value.Creator,
        type: myForm.value.type,
      };
      this.onItemAdded.emit(item);
    }else {
      const item: Item = {
        name: myForm.value.Name,
        genre: myForm.value.Genre,
        creator: myForm.value.Creator,
        type: myForm.value.type,
        totalTime: myForm.value.Total,
      };
      this.onItemAdded.emit(item); 
    }
    myForm.reset();
  }
}
