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

  // Write code to complete item
  completeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].details === item.details) {
        this.items[i].isComplete = true;
      }
    }
  }

  // Write code to delete item
  deleteItem(index) {
    this.items.splice(index, 1);
  }

  toggleItem(index) {
    const item = this.items[index];
    if (item) {
      item.isComplete = !item.isComplete;
    }
  }
}
