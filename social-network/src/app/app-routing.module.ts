import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full" // matchea ese path
  },

  {
    path: "welcome",
    loadChildren: "./features/welcome/welcome.module#WelcomeModule"
  },

  {
    path: "about",
    loadChildren: "./features/about/about.module#AboutModule"
  }
]; // es el tipo de datos en typescript

@NgModule({
  imports: [RouterModule.forRoot(routes)], // configura ese modulo para que funcione con las rutas que le estoy pasando
  exports: [RouterModule] // aqui exporto el modulo tal cual lo he creado en el imports anterior
})
export class AppRoutingModule {}
