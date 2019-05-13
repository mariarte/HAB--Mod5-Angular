import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";

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
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "wall",
        loadChildren: "./features/wall/wall.module#WallModule"
      },
      {
        path: "my-account",
        loadChildren: "./features/my-account/my-account.module#MyAccountModule"
      }
    ]
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
