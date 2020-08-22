import React, { Component } from "react";

export class Post extends Component {
    render() {
        return (
            <div>
                <h1>Post Page{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default Post;
