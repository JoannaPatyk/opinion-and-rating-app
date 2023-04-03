import clock from '../components/assets/clock.png';

function Spinner() {
    return (
        <img
            src={clock}
            alt="Loading..."
            style={{
                width: '100px',
                margin: 'auto',
                display: 'block'
            }}
        />
    );
}

export default Spinner;
