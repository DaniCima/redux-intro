import { createReducer, on } from '@ngrx/store';
import { submit } from '../actions/message-box.actions';

export const initialState: string = '';

export const messageReducer = createReducer(
  initialState,
  on(submit, (state, { message }) => {
    return message;
  })
);
