import PropTypes from 'prop-types'

const Humedad = ({humedad}) => {
    return (
        <div className="humedad">
            Humidity: {humedad}%
        </div>
    )
}

export default Humedad

Humedad.propTypes= {
    humedad: PropTypes.number
}