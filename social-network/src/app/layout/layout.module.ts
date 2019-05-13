import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponents } from "./header/header.component";
import { FooterComponents } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

@NgModule({
  declarations: [HeaderComponents, FooterComponents, MainLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponents, FooterComponents, MainLayoutComponent]
})
export class LayoutModule {}
