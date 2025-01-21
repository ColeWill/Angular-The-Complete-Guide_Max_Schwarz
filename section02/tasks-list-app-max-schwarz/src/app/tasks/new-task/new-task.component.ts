import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTaskData } from "../task.model";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Output() cancelAdd = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  onCancel() {
    this.cancelAdd.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    });
  }
}
