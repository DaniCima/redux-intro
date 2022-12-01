import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { submit } from 'src/app/state/actions/message-box.actions';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {
  message: string;
  message$: Observable<string>;

  constructor(private store: Store<{ message: string }>) {
    this.message = '';
    this.message$ = new Observable<string>();
  }

  ngOnInit(): void {
    this.message$ = this.store.select('message');
  }

  submitMessage() {
    this.store.dispatch(submit({ message: this.message }));
  }
}
