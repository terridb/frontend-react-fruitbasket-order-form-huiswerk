import './App.css'
import {useState} from "react";
import CounterTile from "./components/CounterTile.jsx";
import {countDown, countReset, countUp} from "./helpers/fruitCounter.js";
import Button from "./components/Button.jsx";
import {useForm} from "react-hook-form";

function App() {
    const [fruitState, setFruitState] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });

    const {register, handleSubmit} = useForm({
        defaultValues: {
            age: 0,
            "moment" : "daytime"
        }
    });

    function handleFormSubmit(e) {
        console.log(e, fruitState);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <fieldset className="formFruitCounter">
                    <CounterTile
                        title="🍓Aardbeien"
                        counter={fruitState.strawberries}
                        onCountDown={() => countDown(fruitState, setFruitState, "strawberries")}
                        onCountUp={() => countUp(fruitState, setFruitState, "strawberries")}
                    />
                    <CounterTile
                        title="🍌Bananen"
                        counter={fruitState.bananas}
                        onCountDown={() => countDown(fruitState, setFruitState, "bananas")}
                        onCountUp={() => countUp(fruitState, setFruitState, "bananas")}
                    />
                    <CounterTile
                        title="🍏Appels"
                        counter={fruitState.apples}
                        onCountDown={() => countDown(fruitState, setFruitState, "apples")}
                        onCountUp={() => countUp(fruitState, setFruitState, "apples")}
                    />
                    <CounterTile
                        title="🥝Kiwi's"
                        counter={fruitState.kiwis}
                        onCountDown={() => countDown(fruitState, setFruitState, "kiwis")}
                        onCountUp={() => countUp(fruitState, setFruitState, "kiwis")}
                    />
                    <Button
                        title="Reset"
                        reaction={() => countReset(setFruitState)}
                        buttonType="button"
                    />
                </fieldset>
                <fieldset className="formInput">
                    <label htmlFor="firstname-field">
                        Voornaam
                        <input
                            type="text"
                            {...register("firstname")}
                            id="firstname-field"
                        />
                    </label>
                    <label htmlFor="lastname-field">
                        Achternaam
                        <input
                            type="text"
                            {...register("lastname")}
                            id="lastname-field"
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd
                        <input
                            type="number"
                            {...register("age")}
                            id="age-field"
                        />
                    </label>
                    <label htmlFor="zipcode-field">
                        Postcode
                        <input
                            type="text"
                            {...register("zipcode")}
                            id="zipcode-field"
                        />
                    </label>
                    <label htmlFor="frequency-field">
                        Bezorgfrequentie
                        <select
                            {...register("frequency")}
                            id="frequency-field">
                            <option value="every-week">Iedere week</option>
                            <option value="every-two-weeks">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <div className="moment-field">
                        <label htmlFor="moment">
                            <input
                                type="radio"
                                {...register("moment")}
                                id="daytime"
                                value="daytime"
                            />
                            Overdag
                        </label>
                        <label htmlFor="moment">
                            <input
                                type="radio"
                                {...register("moment")}
                                id="nighttime"
                                value="nighttime"
                            />
                            's Avonds
                        </label>
                    </div>
                    <label htmlFor="remarks-field">
                        Opmerking
                        <textarea
                            {...register("remarks")}
                            id="remarks-field"
                            rows="6"
                            cols="40"
                        />
                    </label>
                    <label htmlFor="conditions-field">
                        <input
                            type="checkbox"
                            {...register("conditions")}
                            id="conditions-field"
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Button
                        title="Verzend"
                        buttonType="submit"
                    />
                </fieldset>
            </form>
        </>
    )
}

export default App
