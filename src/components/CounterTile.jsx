import './CounterTile.css'

function CounterTile({title, counter}) {
    return (
        <div className="counterTile">
            <h3>{title}</h3>
            <button type="button">-</button>
            <p>{counter}</p>
            {/*<button type="button" onClick={() => {*/}
            {/*    setCounter*/}
            {/*}}>+</button>*/}

            {/*<button type="button" onClick={() => {*/}
            {/*    !light ? setLight(true) : setLight(false);*/}
            {/*}}>*/}
            {/*    {!light ? "Turn on" : "Turn off"}*/}
            {/*</button>*/}


        </div>
    )
}

export default CounterTile;