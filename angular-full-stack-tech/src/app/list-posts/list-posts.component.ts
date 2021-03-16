import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Posts } from '../store/posts/posts.model';
import { RemovePost } from '../store/posts/posts.actions';
import { PostSelectors } from '../store/posts/posts.selectors';
import { ProductSelectors } from '../store/product/product.selectors';
import { Product } from '../store/product/product.model';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.sass']
})
export class ListPostsComponent implements OnInit {


  @Select(PostSelectors.getPosts)
  public posts$: Observable<Posts[]>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
  }

  public removePost(id: string) {
    this.store.dispatch(new RemovePost(id));
  }

}
