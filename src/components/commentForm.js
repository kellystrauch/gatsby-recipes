import React, { useState } from "react"
import { firestore } from "../../firebase.js"
import "./commentForm.scss";

export default function CommentForm({page}) {

    const [visitor, setVisitor] = useState("")
    const [message, setMessage] = useState("")

    const handleCommentSubmission = async e => {
        e.preventDefault()

        let comment = {
            Visitor: visitor,
            Message: message,
            Page: page,
            Created: new Date()
        }

        setVisitor("")
        setMessage("")

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error('Error adding comment: ', err)
        })
    }

    return (
        <form onSubmit={ e => handleCommentSubmission(e) }>
            <label htmlFor="visitor">Your name:</label>
            <br/>
            <input type="text" name="visitor" value={visitor} required onChange={e => setVisitor(e.target.value)} />

            <br/>
            <br/>

            <label htmlFor="message">Your comment:</label>
            <br/>
            <textarea name="message" value={message} required onChange={e => setMessage(e.target.value)}></textarea>

            <br/>
            <br/>

            <button className="btn btn-sm btn-info">Submit</button>
        </form>
    )
}