import PropTypes from 'prop-types'

const Velocidad = ({viento}) => {
    return (
        <div className="velocidad">
            Wind speed: {viento} Km/h
        </div>
    )
}

export default Velocidad

Velocidad.propTypes= {
    viento: PropTypes.number
}