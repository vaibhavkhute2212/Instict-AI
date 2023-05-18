import { Component } from '@angular/core';

@Component({
  selector: 'app-obj1',
  templateUrl: './obj1.component.html',
  styleUrls: ['./obj1.component.css']
})
export class Obj1Component {
  showForm = false;

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
