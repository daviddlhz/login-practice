export interface IAuthenticationService {
  authenticate(payload: authenticationData): void;
}

export interface authenticationData {
  email: string;
  password: string;
}
