import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    FeedbackList,
    FeedbackStats,
    FeedbackForm,
    AboutLink,
    Header,
} from "./components";
import AboutPage from "./pages/AboutPage";
import { VscFeedback } from "react-icons/vsc";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header text={"Feedback App"} />
                <AboutLink className="help" />
                <div className="container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }></Route>
                        <Route path="about" element={<AboutPage />} />
                    </Routes>
                </div>
                <VscFeedback className="logo" />
            </BrowserRouter>
        </FeedbackProvider>
    )
};

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
};

export default App;