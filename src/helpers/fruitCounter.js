export function countUp(fruitState, setFruitState, fruitType) {
    setFruitState({
        ...fruitState,
        [fruitType]: fruitState[fruitType] + 1,
    })
}

export function countDown(fruitState, setFruitState, fruitType) {
    if (fruitState[fruitType] >= 1) {
        setFruitState({
            ...fruitState,
            [fruitType]: fruitState[fruitType] - 1,
        })
    }
}

export function countReset(setFruitState) {
    setFruitState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    })
}