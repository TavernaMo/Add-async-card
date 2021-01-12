import React from 'react'
import PostsFrom from "./componets/PostsFrom";
import Posts from "./componets/Posts";
import FetchedPosts from "./componets/FetchedPost";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostsFrom/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Синхронные Посты</h2>
                    <Posts/>
                </div>
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <FetchedPosts/>
                </div>
            </div>
        </div>
    );
}

export default App;
