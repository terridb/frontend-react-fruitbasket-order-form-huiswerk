import './CounterTile.css'
import {countDown, countUp} from "../helpers/fruitCounter.js";

function CounterTile({title, fruitState, setFruitState, fruitType}) {
    return (
        <div className={"counter-tile " + (fruitState[fruitType] === 0 ? 'default' : 'active')}>
            <h3>{title}</h3>
            <button className="counter-button" type="button" onClick={() => countDown(fruitState, setFruitState, fruitType)}>
                -
            </button>
            <p>{fruitState[fruitType]}</p>
            <button className="counter-button" type="button" onClick={() => countUp(fruitState, setFruitState, fruitType)}>
                +
            </button>
        </div>
    )
}

export default CounterTile;