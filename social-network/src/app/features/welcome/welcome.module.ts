import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponents } from "./welcome/welcome.component";
import { WelcomeHeroComponents } from "./welcome-hero/welcome-hero.component";
import { WelcomeFormsComponents } from "./welcome-forms/welcome-forms.components";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponents // apunta al WelcomeComponents
  }
];

@NgModule({
  declarations: [
    WelcomeComponents,
    WelcomeHeroComponents,
    WelcomeFormsComponents
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WelcomeModule {}
