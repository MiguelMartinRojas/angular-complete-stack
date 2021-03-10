import { Selector } from "@ngxs/store";
import { Posts, PostsStateModel } from "./posts.model";
import { PostsState } from "./posts.state";

export class PostSelectors {
    @Selector([PostsState])
    static getPosts(state: PostsStateModel) { return state.posts; }
}
