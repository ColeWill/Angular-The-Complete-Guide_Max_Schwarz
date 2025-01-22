import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/users.data';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';
  selectedUser: User = { id: '', name: '', avatar: '' };

  onSelectUser(id: string) {
    if (id) {
      this.selectedUserId = id;
    }
    this.selectedUser = DUMMY_USERS.find(user => user.id === id) || {
      name: '',
      id: '',
      avatar: '',
    };
  }
}
