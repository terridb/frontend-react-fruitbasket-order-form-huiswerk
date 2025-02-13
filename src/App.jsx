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
            <form>
                <fieldset className="formFruitCounter">
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
                        buttonType="button"
                    />
                </fieldset>
                <fieldset className="formInput">
                    <label htmlFor="firstname-field">
                        Voornaam
                        <input
                            type="text"
                            name="firstname"
                            id="firstname-field"
                        />
                    </label>
                    <label htmlFor="lastname-field">
                        Achternaam
                        <input
                            type="text"
                            name="lastname"
                            id="lastname-field"
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd
                        <input
                            type="number"
                            name="age"
                            id="age-field"
                        />
                    </label>
                    <label htmlFor="zipcode-field">
                        Postcode
                        <input
                            type="text"
                            name="zipcode"
                            id="zipcode-field"
                        />
                    </label>
                    <label htmlFor="delivery-frequency-field">
                        Bezorgfrequentie
                        <select
                            name="delivery-frequency"
                            id="delivery-frequency-field">
                            <option value="every-week">Iedere week</option>
                            <option value="every-two-weeks">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <div className="delivery-moment-field">
                        <label htmlFor="delivery-moment">
                            <input
                                type="radio"
                                name="delivery-moment"
                                id="daytime"
                                value="Day time"
                            />
                            Overdag
                        </label>
                        <label htmlFor="delivery-moment">
                            <input
                                type="radio"
                                name="delivery-moment"
                                id="nighttime"
                                value="Night time"
                            />
                            's Avonds
                        </label>
                    </div>
                    <label htmlFor="remarks-field">
                        Opmerking
                        <textarea
                            name="remarks"
                            id="remarks-field"
                            rows="6"
                            cols="40"
                        />
                    </label>
                    <label htmlFor="conditions-field">
                        <input
                            type="checkbox"
                            name="conditions"
                            id="conditions-field"
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Button
                        title="Verzend"
                        reaction={() => countReset(setState)}
                        buttonType="submit"
                    />
                </fieldset>
            </form>
        </>
    )
}

export default App
