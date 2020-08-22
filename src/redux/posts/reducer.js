import { GET_POSTS, ADD_POST, REMOVE_POST } from "./types";

const initialState = {
    posts: [],
};

export const reducer = (state = initialState, action) => {
    let temp_posts = [];
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: action.posts,
            };
        case ADD_POST:
            temp_posts = [...state.posts, action.new_post];

            return {
                posts: [...temp_posts],
            };

        case REMOVE_POST:
            temp_posts = [...state.posts];
            temp_posts.splice(action.delete_id, 1);
            return {
                posts: [...temp_posts],
            };

        default:
            return state;
    }
};
