import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
  // getDishes(): Promise<Dish[]> {
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES), 2000);
    // });
    // return Promise.resolve(DISHES);
    // return of(DISHES).pipe(delay(2000)).toPromise();
    return of(DISHES).pipe(delay(2000));

  }

  getDish(id: string): Observable<Dish> {
  // getDish(id: number): Promise<Dish> {
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));


  }

  getFeaturedDish(): Observable<Dish> {
  // getFeaturedDish(): Promise<Dish> {
    // return  new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    // });
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));


  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
  
}
