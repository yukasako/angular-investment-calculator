import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModuleをインポート

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
