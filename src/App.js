import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";
import Header from "./components/Header";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback], ...feedback);
    };

    const deleteFeedback = (id) => {
        const newFeedbackData = feedback.filter((item) => item.id !== id);

        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(newFeedbackData);
        }
    };

    return (
        <BrowserRouter>
            <Header text={"Feedback App"} />
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }></Route>
                    <Route path="about" element={<AboutPage />} />
                </Routes>
            </div>
            <AboutLink />
        </BrowserRouter>
    )
};

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
};

export default App;