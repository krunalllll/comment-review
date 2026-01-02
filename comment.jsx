import React, { useState } from "react";
import './comment.css';

export default function ReviewForm() {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const [reviews, setReviews] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !comment || !rating) {
            alert("All fields are required");
            return;
        }

        const newReview = {
            id: Date.now(),
            name,
            comment,
            rating
        };

        setReviews([...reviews, newReview]);
        setName("");
        setComment("");
        setRating("");
    }

    return (
        <div className="review-container">
            <h2>Add Comment & Review</h2>


            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <textarea
                    placeholder="Write your comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />


                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="">Select Rating</option>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>

                <button type="submit">Add Review</button>
            </form>

            {/* Display Reviews */}
            <div className="review-list">
                <h3>Reviews</h3>

                {reviews.length === 0 && <p>No reviews yet</p>}

                {reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <h4>{review.name}</h4>
                        <p>{review.comment}</p>
                        <p>Rating: {"⭐".repeat(review.rating)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
