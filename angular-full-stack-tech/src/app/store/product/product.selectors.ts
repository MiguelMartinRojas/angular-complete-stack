import { Selector } from "@ngxs/store";
import { ProductStateModel } from "./product.model";
import { ProductsState } from "./product.state";

export class ProductSelectors {
    @Selector([ProductsState])
    static getProducts(state: ProductStateModel) { return state.products; }
}
