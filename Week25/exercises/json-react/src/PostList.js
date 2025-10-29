import React from "react";
import posts from "./posts.json";

function PostList() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div
                    key={post.id}
                    style={{
                        backgroundColor: "lightblue",
                        margin: "10px 0",
                        padding: "10px",
                        borderRadius: "8px",
                    }}
                >

                    <h3 style={{ color: "darkred" }}>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;