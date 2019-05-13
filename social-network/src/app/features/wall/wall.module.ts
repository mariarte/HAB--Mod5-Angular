import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { WallComponent } from "./wall/wall.component";
import { LayoutModule } from "../../layout/layout.module";

const routes: Routes = [
  {
    path: "",
    component: WallComponent // apunta al AboutComponents
  }
];

@NgModule({
  declarations: [WallComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule]
})
export class WallModule {}
