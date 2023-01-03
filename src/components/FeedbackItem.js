import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from "./Card";
function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card reverse={true}>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='#86be9e' />
            </button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='#86be9e' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;
