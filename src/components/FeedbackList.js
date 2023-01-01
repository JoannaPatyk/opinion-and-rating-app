import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({feedback, handleDelete}) {
  
  if(!feedback || feedback.length === 0){
    return <p>No feedback yet...</p>
  };

  return (
    <div className='feedback-list'>
        {feedback.map(({id, rating, text}) => {
          return <FeedbackItem 
          key={id} 
          rating={rating} 
          text={text}
          id={id}
          handleDelete={handleDelete}
          />
        })}
    </div>
  )
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
