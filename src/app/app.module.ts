import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormsModule } from '@angular/forms'; // import để sử dụng data binding trong form
import { HttpClientModule } from '@angular/common/http'; // import để sử dụng http bên component

@NgModule({
  declarations: [
    HomeComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    OrderConfirmComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [LoginComponent],
})
export class AppModule {}
