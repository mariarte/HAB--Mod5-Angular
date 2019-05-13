import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { AuthInfo } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authInfo: AuthInfo; // Declaro una propiedad token para usarla en el servicio

  constructor(private http: HttpClient) {}

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(tap((info: AuthInfo) => (this.authInfo = info))); // Guardo el token
    // Para acceder a ese token AuthService.authInfo
  }

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      email,
      password
    });
  }
}
