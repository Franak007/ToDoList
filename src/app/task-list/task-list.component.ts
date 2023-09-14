import {Component, OnInit} from '@angular/core';
import {TASKS} from "../mock-task";
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  taskList: Task[] = TASKS;

  ngOnInit(): void {
    console.log(this.taskList);
  }

}
