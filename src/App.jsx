import './App.css'
import {useState} from "react";
import CounterTile from "./components/CounterTile.jsx";
import {countDown, countReset, countUp} from "./helpers/fruitCounter.js";

function App() {
    const [state, setState] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="counterTile">
                <h3>🍓Aardbeien</h3>
                <button type="button" onClick={() => {countDown(state, setState,"strawberries")}}>
                    -
                </button>
                <p>{state.strawberries}</p>
                <button type="button" onClick={() => {countUp(state, setState,"strawberries")}}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🍌Bananen</h3>
                <button type="button" onClick={() => {countDown(state, setState,"bananas")}}>
                    -
                </button>
                <p>{state.bananas}</p>
                <button type="button" onClick={() => {countUp(state, setState,"bananas")}}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🍏Appels</h3>
                <button type="button" onClick={() => {countDown(state, setState,"apples")}}>
                    -
                </button>
                <p>{state.apples}</p>
                <button type="button" onClick={() => {countUp(state, setState,"apples")}}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🥝Kiwi's</h3>
                <button type="button" onClick={() => {countDown(state, setState,"kiwis")}}>
                    -
                </button>
                <p>{state.kiwis}</p>
                <button type="button" onClick={() => {countUp(state, setState,"kiwis")}}>
                    +
                </button>
            </div>
            <button className="resetButton" onClick={() => {countReset(setState)}}>
                Reset
            </button>
            {/*<CounterTile*/}
            {/*    title="🍓Aardbeien"*/}
            {/*/>*/}
            {/*<CounterTile*/}
            {/*    title="🍌Bananen"*/}
            {/*/>*/}
            {/*<CounterTile*/}
            {/*    title="🍏Appels"*/}
            {/*/>*/}
            {/*<CounterTile*/}
            {/*    title="🥝Kiwi's"*/}
            {/*/>*/}
        </>
    )
}

export default App
