import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
  constructor() {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private tasks = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
