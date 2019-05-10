import { Component } from "@angular/core";

@Component({
  selector: "sn-welcome-forms",
  templateUrl: `./welcome-forms.components.html`
})
export class WelcomeFormsComponents {
  isRegisterFormVisible = true;

  toggleForm(isRegisterClick) {
    this.isRegisterFormVisible = isRegisterClick;
  }
}
