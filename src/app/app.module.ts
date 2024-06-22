import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms'; // import để sử dụng data binding trong form
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // import để sử dụng http bên component
import { TokenInterceptor } from './interceptors/token.interceptor';

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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [LoginComponent],
})
export class AppModule { }
