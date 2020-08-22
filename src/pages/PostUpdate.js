import React, { Component } from "react";

export class PostUpdate extends Component {
    render() {
        return <h1>post Update Page {this.props.match.params.id}</h1>;
    }
}

export default PostUpdate;
