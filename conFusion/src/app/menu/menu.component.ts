import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  dish: Dish;

  errMess: string;


  constructor(private dishService: DishService,
    @Inject('BaseURL') public baseURL : string) { }

  ngOnInit(): void {
    // this.dishService.getFeaturedDish().then(dish => this.dish = dish);

    // this.dishes = this.dishService.getDishes();

    // this.dishService.getDishes()
    // .then(dishes => this.dishes = dishes);
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes, errmess => this.errMess = <any>errmess);

    console.log(this.baseURL);

  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }



}
