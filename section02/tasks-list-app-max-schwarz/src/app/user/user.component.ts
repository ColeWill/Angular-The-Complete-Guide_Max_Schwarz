import {
  Component,
  EventEmitter,
  Input,
  Output,
  //  'output' // ngSignals
} from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // Signals Approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); // Signals way to emit events

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  // imagePath = computed(() => "assets/users/" + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
