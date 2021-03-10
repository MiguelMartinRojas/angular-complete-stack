import { Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Store } from '@ngxs/store';
import { AddPost } from '../store/posts/posts.actions';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.sass']
})
export class NewPostsComponent implements OnInit {
  public text: string = '';
  requiredFormControl = new FormControl('', [Validators.required]);
  
  constructor(
    private store: Store,
  ) { }
  ngOnInit() {
  }
  public addPost() {
    this.store.dispatch(new AddPost({ id: uuid(), text: this.text }));
  }
  
  getErrorMessage() {
    if (this.requiredFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.requiredFormControl.hasError('email') ? 'Not a valid email' : '';
  }

}