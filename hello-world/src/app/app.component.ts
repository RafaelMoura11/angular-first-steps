import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  ngStyle: number = 9

  userData: {
    name: string;
    age: number;
  } = {
    name: "Salve",
    age: 87,
  };
}
