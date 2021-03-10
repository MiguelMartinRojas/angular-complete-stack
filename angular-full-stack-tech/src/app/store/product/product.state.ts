import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ProductStateModel } from './product.model';
import { AddProduct, LoadProducts, RemoveProduct } from './product.actions';
import { ApiService } from "src/services/api.service";
import { Injectable } from '@angular/core';

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

        this.apiService.getProducts().subscribe((data: any[]) => {
            console.log(data);
            patchState({
                products: data
            });
        })

    }

}