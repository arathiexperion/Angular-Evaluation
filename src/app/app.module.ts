import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor} from './shared/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './shared/product.service';
import { RouterModule } from '@angular/router';
import { OrderbyComponent } from './orderby/orderby.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DisplayComponent,
    LoginComponent,
    AdminComponent,
    OrderbyComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    //RouterModule.forRoot(
     // appRoutes,
      //{enableTracing: true}
      //)
    ],
   
   
 
  providers: [ProductService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
