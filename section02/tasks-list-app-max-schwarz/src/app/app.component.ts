import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./user/users.data";
import { CommonModule } from "@angular/common";
import { TasksComponent } from "./tasks/tasks.component";

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = "";
  selectedUser: User = { id: "", name: "", avatar: "" };

  onSelectUser(id: string) {
    if (id) {
      this.selectedUserId = id;
    }
    this.selectedUser = DUMMY_USERS.find(user => user.id === id) || {
      name: "",
      id: "",
      avatar: "",
    };
  }
}
