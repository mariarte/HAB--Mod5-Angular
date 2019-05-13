import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";

const routes: Routes = [
  {
    path: "",
    component: MyAccountComponent // apunta al AboutComponents
  }
];

@NgModule({
  declarations: [MyAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MyAccountModule {}
