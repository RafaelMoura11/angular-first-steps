import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  @Input() name: string = "";
  @Input() userData: {
    name: string;
    age: number;
  } = {
    name: "",
    age: 0,
  };
}
