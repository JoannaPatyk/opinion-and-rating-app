import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutLink() {
    return (
        <div className='about-link'>
            <Link to={{ pathname: '/about' }}>
                <FaHandsHelping size={40} />
            </Link>
        </div>
    )
};

export default AboutLink;