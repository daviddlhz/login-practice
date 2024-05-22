import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "@features/authentication/component/login/authentication.component";
import { authenticationRoutes } from "./authentication.routing";
import { HlmLabelDirective } from "@spartan-ng/ui-label-helm";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthenticationService} from "@core/services/authentication.services";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    RouterModule.forChild(authenticationRoutes),
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AuthenticationComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
