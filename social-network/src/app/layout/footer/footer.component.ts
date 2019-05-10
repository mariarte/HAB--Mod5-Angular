import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sn-footer",
  template: `
    <nav class="navbar navbar-dark bg-primary text-light">
      <span>@María Arteaga 2019</span>
      <a class="btn btn-link" routerLink="/about">About</a>
    </nav>
  `,
  styles: []
})
export class FooterComponents {}
