import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-dbc',
    templateUrl: './data-binding-child.component.html'
})
export class DataBindingChildComponent {
    @Input() incomingdata;
}