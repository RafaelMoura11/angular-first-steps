import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import Animal from '../../Animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getOne(id).subscribe((animal) => this.animal = animal);
  }

}
