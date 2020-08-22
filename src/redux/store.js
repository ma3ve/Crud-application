import { createStore, combineReducers } from "redux";
import { reducer as posts_reducer } from "./posts/reducer";
import { reducer as liked_reducer } from "./liked/reducer";
import { reducer as disliked_reducer } from "./disliked/reducer";

const rootReducer = combineReducers({
    posts: posts_reducer,
    liked: liked_reducer,
    disliked: disliked_reducer,
});

export default createStore(rootReducer);
