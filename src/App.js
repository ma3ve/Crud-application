import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Disliked from "./pages/Disliked";
import Liked from "./pages/Liked";
import Post from "./pages/Post";
import PostUpdate from "./pages/PostUpdate";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/liked" component={Liked} exact />
                <Route path="/disliked" component={Disliked} exact />
                <Route path="/posts/create" component={Create} exact />
                <Route path="/posts/:id" component={Post} exact />
                <Route path="/posts/:id/update" component={PostUpdate} exact />
                <Route path="/search" component={Search} />
            </Switch>
        </Router>
    );
}

export default App;
