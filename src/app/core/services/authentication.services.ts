import {Injectable} from "@angular/core";
import {authenticationData, IAuthenticationService} from "@core/interface/authentication.interface";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthDto} from "@core/types/authentication.types";
import {environment} from "@environment/environment";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService implements IAuthenticationService {

  constructor(private router: HttpClient) {
  }

  authenticate(payload: authenticationData): Observable<HttpResponse<AuthDto>> {
    return this.router.post<AuthDto>(`${environment.API}/api/User/login`, payload, { observe: 'response' })
  }
}
