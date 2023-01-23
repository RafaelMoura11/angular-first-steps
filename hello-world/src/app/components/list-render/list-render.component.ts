import { Component } from '@angular/core';

import Animal from '../../Animal';

import { ListService } from '../../services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }

  removeAnimal(animal: Animal): void {
    this.listService.remove(animal).subscribe(() => this.getAnimals());
  }

  animals: Animal[] = [];

  animalDetails: string = ''

  showAge(animal: Animal) {
    this.animalDetails = `The animal ${animal.name} is ${animal.age} years old!`;
  }

}
