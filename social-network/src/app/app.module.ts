import { BrowserModule } from "@angular/platform-browser"; // necesario para que angular trabaje en el navegador
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module"; // importo un modulo de routing
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent] // donde arranca mi aplicacion
})
export class AppModule {}
