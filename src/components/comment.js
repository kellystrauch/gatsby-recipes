import React from "react"
import "./comment.scss";

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <>
            <div class="comment-grid">
                <div class="row">
                    <div class="col-3">
                        <img src={"https://api.adorable.io/avatars/90/"+ comment.Visitor + ".png"} alt={comment.Visitor} />
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                            <strong>{comment.Visitor} says:</strong>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                            <em>{comment.Message}</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <small>{tsMonth}/{tsDay}/{tsYear}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}