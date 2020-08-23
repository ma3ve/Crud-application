import React, { Component } from "react";
import { connect } from "react-redux";
import changepage from "../redux/others/actions";
import { get_posts } from "../redux/posts/actions";
import axios from "axios";
import PostCard from "../components/PostCard";

export class Home extends Component {
    componentDidMount = async () => {
        this.props.changeNavPage(this.props.location.pathname);
        try {
            const res = await axios({
                method: "get",
                url: "http://jsonplaceholder.typicode.com/posts",
            });
            console.log(res.data);
            this.props.getPosts(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        const { posts } = this.props.posts;
        return (
            <div>
                {posts.map((post, array_id) => {
                    return (
                        <div key={array_id}>
                            <PostCard
                                title={post.title}
                                body={post.body}
                                array_id={array_id}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        changeNavPage: (page) => {
            dispatch(changepage(page));
        },
        getPosts: (posts) => {
            dispatch(get_posts(posts));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
