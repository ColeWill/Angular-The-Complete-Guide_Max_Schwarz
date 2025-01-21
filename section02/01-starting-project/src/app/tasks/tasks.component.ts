import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  usersTasks = [];

  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Do the laundry",
      summary: "Wash, dry, and fold clothes.",
      dueDate: "1-28-25",
    },
    {
      id: "t2",
      userId: "u2",
      title: "Grocery shopping",
      summary: "Buy groceries for the week.",
      dueDate: "2-15-25",
    },
    {
      id: "t3",
      userId: "u2",
      title: "Clean the kitchen",
      summary: "Wash dishes, wipe counters, and mop the floor.",
      dueDate: "3-10-25",
    },
    {
      id: "t4",
      userId: "u3",
      title: "Mow the lawn",
      summary: "Cut the grass and trim the edges.",
      dueDate: "4-05-25",
    },
    {
      id: "t5",
      userId: "u3",
      title: "Take out the trash",
      summary: "Collect and dispose of household garbage.",
      dueDate: "5-20-25",
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
