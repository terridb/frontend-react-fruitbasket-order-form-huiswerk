import './App.css'
import {useState} from "react";
import CounterTile from "./components/CounterTile.jsx";
import {countDown, countReset, countUp} from "./helpers/fruitCounter.js";
import MainButton from "./components/MainButton.jsx";
import {useForm} from "react-hook-form";
import FormInputField from "./components/FormInputField.jsx";

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
            "moment": "daytime"
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
                    <MainButton
                        title="Reset"
                        reaction={() => countReset(setFruitState)}
                        buttonType="button"
                    />
                </fieldset>
                <fieldset className="formInput">
                    <FormInputField
                        isRequired={true}
                        inputId="firstname-field"
                        inputLabel="Voornaam"
                        inputType="text"
                        inputName="firstname"
                        register={register}
                    />
                    <FormInputField
                        isRequired={true}
                        inputId="lastname-field"
                        inputLabel="Achternaam"
                        inputType="text"
                        inputName="lastname"
                        register={register}
                    />
                    <FormInputField
                        isRequired={true}
                        inputId="age-field"
                        inputLabel="Leeftijd"
                        inputType="number"
                        inputName="age"
                        register={register}
                    />
                    <FormInputField
                        isRequired={true}
                        inputId="zipcode-field"
                        inputLabel="Postcode"
                        inputType="text"
                        inputName="zipcode"
                        register={register}
                    />
                    <FormInputField
                        inputId="frequency-field"
                        inputLabel="Bezorgfrequentie"
                        inputType="select"
                        inputName="frequency"
                        register={register}>
                        <option value="every-week">Iedere week</option>
                        <option value="every-two-weeks">Om de week</option>
                        <option value="every-month">Iedere maand</option>
                    </FormInputField>
                    <div className="moment-field">
                        <FormInputField
                            inputId="daytime"
                            inputLabel="Overdag"
                            inputType="radio"
                            inputName="moment"
                            register={register}
                        />
                        <FormInputField
                            inputId="nighttime"
                            inputLabel="'s Avonds'"
                            inputType="radio"
                            inputName="moment"
                            register={register}
                        />
                    </div>
                    <FormInputField
                        isRequired={false}
                        inputId="remarks-field"
                        inputLabel="Opmerking"
                        inputName="remarks"
                        inputType="textarea"
                        inputRows="6"
                        inputCols="40"
                        register={register}
                    />
                    <FormInputField
                        isRequired={true}
                        inputId="conditions-field"
                        inputLabel="Ik ga akkoord met de voorwaarden"
                        inputName="conditions"
                        register={register}
                        inputType="checkbox"
                    />
                    <MainButton
                        title="Verzend"
                        buttonType="submit"
                        isDisabled={
                            fruitState.strawberries === 0 &&
                            fruitState.bananas === 0 &&
                            fruitState.apples === 0 &&
                            fruitState.kiwis === 0
                        }
                    />
                </fieldset>
            </form>
        </>
    )
}

export default App
