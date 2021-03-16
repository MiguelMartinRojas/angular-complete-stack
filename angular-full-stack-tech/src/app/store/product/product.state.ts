import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ProductStateModel } from './product.model';
import { AddProduct, LoadProducts, LoadProductsByPage, RemoveProduct } from './product.actions';
import { ApiService } from "src/services/api.service";
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';

@State({
    name: 'products',
    defaults: {
        products: []
    }
})
@Injectable()
export class ProductsState {

    constructor(private apiService: ApiService) {
    }

    @Action(AddProduct)
    add({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddProduct) {
        const state = getState();
        patchState({
            products: [...state.products, payload]
        });
    }

    @Action(RemoveProduct)
    remove({ getState, patchState }: StateContext<ProductStateModel>, { payload }: RemoveProduct) {
        patchState({
            products: getState().products.filter(product => product.name !== payload)
        });
    }

    @Action(LoadProducts)
    load({ getState, patchState }: StateContext<ProductStateModel>, { }: LoadProducts) {
        const state = getState();
        return this.apiService.getProducts().pipe(
            take(1),
            tap((res: HttpResponse<any[]>) => {
                console.log(res);
                patchState({
                    products: res.body
                });
            })
        )
    }

    @Action(LoadProductsByPage)
    loadProductsByPage({ getState, patchState }: StateContext<ProductStateModel>, { pagination }: LoadProductsByPage) {
        const state = getState();
        return this.apiService.sendGetRequestToUrl(pagination).subscribe((res: HttpResponse<any>) => {
            console.log(res);
            patchState({
                products: res.body
            });
        })
    }
}