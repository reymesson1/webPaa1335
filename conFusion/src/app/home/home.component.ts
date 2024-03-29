import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  maybeFeaturedLeader: Leader;


  constructor(private dishservice: DishService,
    private leaderService: LeaderService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') public baseURL : string) { }

  ngOnInit() {
    // this.dish = this.dishservice.getFeaturedDish();
    // this.dishservice.getFeaturedDish().then(dish => this.dish = dish);
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);

    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.maybeFeaturedLeader = this.leaderService.getFeaturedLeader();

  }

}
