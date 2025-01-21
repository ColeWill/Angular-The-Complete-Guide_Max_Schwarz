import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Output() cancelAdd = new EventEmitter<void>();

  onCancel() {
    this.cancelAdd.emit();
  }
}
