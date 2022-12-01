import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = new Observable<number>();
  }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
