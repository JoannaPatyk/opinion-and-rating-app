import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet...</p>
  };

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(({ id, rating, text }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <FeedbackItem
                key={id}
                rating={rating}
                text={text}
                id={id}
                handleDelete={handleDelete}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
