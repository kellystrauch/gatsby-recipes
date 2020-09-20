import React from "react"
import Comment from "./comment.js"
import CommentForm from "./commentForm.js"
import "./comments.scss";

export default function Comments({ comments, page }) {
    return (
     <div class="comments">
        <hr/>
        <h5>Tell us what you think!  Leave a comment below.</h5>
        <br/>
        {/* comment form */}
        <CommentForm page={page} />
        <hr/>

        {/* comment list */}
        {comments.length === 0 && 
            <em>Be the first to leave a comment!</em>
        }
        {comments.length > 0 && 
            comments.map((c, index) => (
                <Comment comment={c} key={index} />
            ))
        }
     </div>
    )
}