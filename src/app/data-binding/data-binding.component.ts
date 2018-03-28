import { Component } from "@angular/core";
import { AuthService } from "../services/AuthService";
import { Console } from "@angular/core/src/console";

@Component({
    selector: 'app-db',
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
    title = '';
    verified = false;
    constructor(private auth: AuthService){}

    validate() {
        console.log('v called');
       this.verified = this.auth.verify(this.title);
    }
}