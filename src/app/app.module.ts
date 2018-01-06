import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ProdottoService} from "./provider/prodotto.service";
import {UserService} from "./provider/user.service";
import {CreditcardService} from "./provider/creditcard.service";
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [UserService,ProdottoService,CreditcardService],
   bootstrap: [AppComponent]

})
export class AppModule { }
