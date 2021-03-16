import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { LoadProducts, LoadProductsByPage } from '../store/product/product.actions';
import { Product } from '../store/product/product.model';
import { ProductSelectors } from '../store/product/product.selectors';

@Component({
	selector: 'app-card-product',
	templateUrl: './card-product.component.html',
	styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent implements OnInit {
	@Select(ProductSelectors.getProducts)
	public products$: Observable<Product[]>;

	constructor(
		private store: Store
	) { }

	ngOnInit() {
		this.store.dispatch(new LoadProducts());
	}

	public LoadByPage( page: string) {
		this.store.dispatch(new LoadProductsByPage(page));
	}
	
}
