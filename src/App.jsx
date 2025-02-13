import './App.css'
import {useState} from "react";
import CounterTile from "./components/CounterTile.jsx";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    console.log([strawberries]);
    console.log([bananas]);
    console.log([apples]);
    console.log([kiwis]);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="counterTile">
                <h3>🍓Aardbeien</h3>
                <button type="button" onClick={() => {
                    if (strawberries >= 1) {
                    setStrawberries(strawberries - 1);
                }}}>
                    -
                </button>
                <p>{strawberries}</p>
                <button type="button" onClick={() => {
                    setStrawberries(strawberries + 1)
                }}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🍌Bananen</h3>
                <button type="button" onClick={() => {
                    if (bananas >= 1) {
                        setBananas(bananas - 1);
                    }}}>
                    -
                </button>
                <p>{bananas}</p>
                <button type="button" onClick={() => {
                    setBananas(bananas + 1)
                }}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🍏Appels</h3>
                <button type="button" onClick={() => {
                    if (apples >= 1) {
                        setApples(apples - 1);
                    }}}>
                    -
                </button>
                <p>{apples}</p>
                <button type="button" onClick={() => {
                    setApples(apples + 1)
                }}>
                    +
                </button>
            </div>
            <div className="counterTile">
                <h3>🥝Kiwi's</h3>
                <button type="button" onClick={() => {
                    if (kiwis >= 1) {
                        setKiwis(kiwis - 1);
                    }}}>
                    -
                </button>
                <p>{kiwis}</p>
                <button type="button" onClick={() => {
                    setKiwis(kiwis + 1)
                }}>
                    +
                </button>
            </div>
            <button className="resetButton" onClick={() => {
                setStrawberries(0);
                setBananas(0);
                setApples(0);
                setKiwis(0);
            }}>
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
