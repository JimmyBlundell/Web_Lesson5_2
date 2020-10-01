import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header = 'My 2020 To Do List';

  // define list of items
  public items: Array<{details: string, isComplete: boolean }> = [];

  public newItem;

  // Write code to push new item
  submitNewItem() {
    if (this.newItem.details === '') {
      // do nothing
    } else {
      this.items.push({
        details: this.newItem,
        isComplete: false
      });
    }
  }

  // Write code to delete item
  deleteItem(index) {
    this.items.splice(index, 1);
  }

  // Code to "complete" the item"
  toggleItem(index) {
    const item = this.items[index];
    if (item) {
      item.isComplete = !item.isComplete;
    }
  }
}
