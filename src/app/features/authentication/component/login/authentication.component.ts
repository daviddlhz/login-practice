import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthenticationService} from "@core/services/authentication.services";
import {AuthDto} from "@core/types/authentication.types";
import {Router} from "@angular/router";

@Component({
    selector: "authentication-component",
    templateUrl: "./authentication.component.html",
    styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
    authenticationForm!: FormGroup;
    errorAuthenticationService!: HttpErrorResponse;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.authenticationForm = new FormGroup({
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required, Validators.minLength(6)])
        });
    }

    authenticate(): void {
        if (this.authenticationForm.valid) {
            this.authenticationService.authenticate(this.authenticationForm.value).subscribe({
              next: (response: HttpResponse<AuthDto>) => this.router.navigate(["/success"]),
              error: (response: HttpErrorResponse) => this.errorAuthenticationService = response
            })
        }
    }
}
