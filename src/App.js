import { useState } from "react";
import FeedbackData from './data/FeedbackData';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

function App() { 
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        const newFeedbackData = feedback.filter((item) => item.id !== id);

        if(window.confirm('Are you sure you want to delete?')){
        setFeedback(newFeedbackData);
        }
    };

    return (
        <>
        <Header text={"Feedback App"}/>
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
};

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
};

export default App;