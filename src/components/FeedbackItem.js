import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from "./Card";

function FeedbackItem({id, rating, text, handleDelete}) {
    return (
        <Card reverse={true}>
            <div className='num-display'>{rating}</div>
            <button className='close' onClick={()=> handleDelete(id)}>
                <FaTimes color='#86be9e'/>
            </button>
            <div className='text-display'>{text}</div>
        </Card>
  )
};

FeedbackItem.propTypes = {
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}

export default FeedbackItem;
