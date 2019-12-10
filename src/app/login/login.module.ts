import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginComponent } from "~/app/login/login.component";
import { LoginRoutingModule } from "~/app/login/login.routing.module";
import { AuthService } from "~/shared/services/auth.service";



@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [LoginComponent],
    imports:[LoginRoutingModule],
    providers: [AuthService]
})

export class LoginModule {}