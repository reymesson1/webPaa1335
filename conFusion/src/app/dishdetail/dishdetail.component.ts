import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    var id : number = +this.route.snapshot.params['id'];
    console.log(id);
    // this.dish = this.dishservice.getDish(id);
    this.dishservice.getDish(id).then(dish => this.dish = dish);

    console.log(this.dish);
  }

  goBack(): void {
    this.location.back();
  }

}