import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "authentication-component",
    templateUrl: "./authentication.component.html",
    styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
    authenticationForm!: FormGroup;
    errorAuthenticationService!: HttpErrorResponse;

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
            console.log(this.authenticationForm.value);
        }
    }
}