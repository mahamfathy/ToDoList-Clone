import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
title:string="To Do List Application"
imagePath:string="https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/104-1024.png"
}
