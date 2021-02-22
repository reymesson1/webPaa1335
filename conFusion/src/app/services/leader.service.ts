import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeaderById(id: number): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}