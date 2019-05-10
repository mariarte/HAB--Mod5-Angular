import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponents } from "./header/header.component";
import { FooterComponents } from "./footer/footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponents, FooterComponents],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponents, FooterComponents]
})
export class LayoutModule {}
