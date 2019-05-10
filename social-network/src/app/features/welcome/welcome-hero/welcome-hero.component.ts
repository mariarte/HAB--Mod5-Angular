import { Component, Input } from "@angular/core";

@Component({
  selector: "sn-welcome-hero",
  templateUrl: `./welcome-hero.components.html`,
  styles: [
    `
      i {
        width: 40px;
      }
    `
  ]
})
export class WelcomeHeroComponents {
  @Input() rows: HeroItem[];

  getIconColor(item: HeroItem) {
    if (item.id === 2) {
      return "green";
    }
  }
}
