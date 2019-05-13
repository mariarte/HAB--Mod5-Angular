import { Component } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-wall",
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.scss"]
})
export class WallComponent {
  constructor(public userService: UserService) {}
}
