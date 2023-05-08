import PropTypes from 'prop-types'

const Temperatura = ({ ciudad, pais, icono, clima, temperatura }) => {
    console.log(ciudad)
    console.log(pais)
    return (
        <div className="temperatura">
            <div className="ciudad">
                <h3>{ciudad}, {pais}</h3>
            </div>
            <div className="icono">
                <div id="icon"><img id="wicon" src={icono} alt="Weather icon" width='100px' /></div>
                <div>{clima}</div>
            </div>
            <div className="temp">
                Temperature: {temperatura} °C
            </div>
        </div>
    )
}

export default Temperatura

Temperatura.propTypes = {
    ciudad: PropTypes.string,
    pais: PropTypes.string,
    icono: PropTypes.string,
    clima: PropTypes.string,
    temperatura: PropTypes.number
}