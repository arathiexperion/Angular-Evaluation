import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { OrderbyComponent } from './orderby/orderby.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  { path:"display",component:DisplayComponent},
  {path:"list",component:ProductComponent},
  { path:"list",component:ProductComponent,canActivate:[AuthGuard],data:{role:'1'}},
  { path:"admin",component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  { path:"list/:Id",component:ProductComponent},
  { path:"listorder",component:OrderbyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
