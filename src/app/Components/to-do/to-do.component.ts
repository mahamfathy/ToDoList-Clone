import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  title: string = 'To Do List Application';
  imagePath: string =
    'https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/104-1024.png';

  tasks: string[] = [];
  newTask: string = '';
  isAvailable:boolean=false
  addTask() {
    if (this.newTask !== null && this.newTask !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.isAvailable=true
    }
  }
  removeTask() {}
  editTask() {}
}
