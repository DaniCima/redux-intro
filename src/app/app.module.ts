import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { FormsModule } from '@angular/forms';
import { messageReducer } from './state/reducers/message-box.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent, MessageBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer, message: messageReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
