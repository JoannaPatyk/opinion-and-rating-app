import { useState } from 'react';
import Card from "./Card";
import Button from './Button';
import Rating from './Rating';

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters...');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <Rating select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Write a review..."
                    />
                    <Button
                        type='submit'
                        isDisabled={btnDisabled}
                    >send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
};

export default FeedbackForm;