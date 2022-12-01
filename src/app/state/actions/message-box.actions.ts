import { createAction, props } from '@ngrx/store';

export const submit = createAction(
  '[Message Component] SendMessage',
  props<{ message: string }>()
);
