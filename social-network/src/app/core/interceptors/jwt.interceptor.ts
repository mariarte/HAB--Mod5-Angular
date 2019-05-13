import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { accessToken } = this.authService.authInfo;

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer $(accessToken)`
        }
      });
    }
    return next.handle(request);
  }
}
