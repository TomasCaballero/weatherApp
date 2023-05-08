import PropTypes from 'prop-types'

const Minmax = ({tempMin, tempMax}) => {
    return (
        <div className="minMax">
            <div className='tempMin'>Min: {tempMin} °C</div>
            <div className="tempMax">Max: {tempMax} °C</div>
        </div>
    )
}

export default Minmax

Minmax.propTypes= {
    tempMin: PropTypes.number,
    tempMax: PropTypes.number
}