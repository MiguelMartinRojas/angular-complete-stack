import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './card-product/card-product.component';
import { StoreItemComponent } from './store-item/store-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full'},
  { path: 'store', component: StoreItemComponent },
  { path: 'product', component: CardProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
