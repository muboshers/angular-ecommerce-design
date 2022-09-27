import { FoodService } from './../servicess/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Foods[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.products = this.foodService
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.products = this.foodService.getFoodByTag(params['tag']);
      } else {
        this.products = this.foodService.getAll();
      }
    });
  }
}
