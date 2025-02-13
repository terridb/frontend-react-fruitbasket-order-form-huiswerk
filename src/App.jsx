import './App.css'
import {useState} from "react";
import CounterTile from "./components/CounterTile.jsx";
import {countDown, countReset, countUp} from "./helpers/fruitCounter.js";
import Button from "./components/Button.jsx";

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
            <CounterTile
                title="🍓Aardbeien"
                counter={state.strawberries}
                onCountDown={() => countDown(state, setState, "strawberries")}
                onCountUp={() => countUp(state, setState, "strawberries")}
            />
            <CounterTile
                title="🍌Bananen"
                counter={state.bananas}
                onCountDown={() => countDown(state, setState, "bananas")}
                onCountUp={() => countUp(state, setState, "bananas")}
            />
            <CounterTile
                title="🍏Appels"
                counter={state.apples}
                onCountDown={() => countDown(state, setState, "apples")}
                onCountUp={() => countUp(state, setState, "apples")}
            />
            <CounterTile
                title="🥝Kiwi's"
                counter={state.kiwis}
                onCountDown={() => countDown(state, setState, "kiwis")}
                onCountUp={() => countUp(state, setState, "kiwis")}
            />
            <Button
                title="Reset"
                reaction={() => countReset(setState)}
            />
        </>
    )
}

export default App
