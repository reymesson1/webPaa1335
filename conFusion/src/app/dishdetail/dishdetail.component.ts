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

  dish: any;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    var id : any = +this.route.snapshot.params['id'];
    console.log(id);
    this.dish = this.dishservice.getDish(id);
    // this.dishservice.getDishes()
    // .then(dishes => this.dishes = dishes);

    console.log(this.dish);
  }

  goBack(): void {
    this.location.back();
  }

}