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
  isAvailable: boolean = false;
  addTask() {
    if (this.newTask !== null && this.newTask !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.isAvailable = true;
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvailable = this.tasks.length > 0;
  }
  // 1- promt way
  // editTask(index: number) {
  //   let updateTask = prompt('Edit Task', this.tasks[index]);
  //   if (updateTask !== null) {
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }

  // 2- field value way
  editTask(index: number, newTaskEdit: string): string | void {
    // const trimedTask = newTaskEdit.trim();
    if (newTaskEdit !== '') {
      this.tasks[index] = newTaskEdit.trim();
    } else {
      newTaskEdit = this.tasks[index];
      return (this.newTask = newTaskEdit);
    }
    this.newTask=""
  }
}
