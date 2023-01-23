import { Component } from '@angular/core';

import Animal from '../../Animal';

import ListService from '../../'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService)

  animals: Animal[] = [
    {
      name: "Toto", type: "Dog", age: 4
    },
    {
      name: "Mia", type: "Cat", age: 10
    },
    {
      name: "Zeca", type: "Bird", age: 2
    }
  ]

  animalDetails: string = ''

  showAge(animal: Animal) {
    this.animalDetails = `The animal ${animal.name} is ${animal.age} years old!`;
  }

}
