import './CounterTile.css'

function CounterTile({counter, title, onCountUp, onCountDown}) {
    return (
        <div className={"counter-tile " + (counter === 0 ? 'default' : 'active')}>
            <h3>{title}</h3>
            <button className="counter-button" type="button" onClick={onCountDown}>
                -
            </button>
            <p>{counter}</p>
            <button className="counter-button" type="button" onClick={onCountUp}>
                +
            </button>
        </div>
    )
}

export default CounterTile;