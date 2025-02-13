import './CounterTile.css'

function CounterTile({counter, title, onCountUp, onCountDown}) {
    return (
        <div className="counterTile">
            <h3>{title}</h3>
            <button type="button" onClick={onCountDown}>
                -
            </button>
            <p>{counter}</p>
            <button type="button" onClick={onCountUp}>
                +
            </button>
        </div>
    )
}

export default CounterTile;