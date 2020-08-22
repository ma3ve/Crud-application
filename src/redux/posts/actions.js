import { GET_POSTS, ADD_POST, REMOVE_POST } from "./types";

export const get_posts = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    };
};

export const add_post = (new_post) => {
    return {
        type: ADD_POST,
        new_post,
    };
};

export const remove_post = (delete_id) => {
    return {
        type: REMOVE_POST,
        delete_id,
    };
};
