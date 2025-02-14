export function countUp(state, setState, fruit) {
    setState({
        ...state,
        [fruit]: state[fruit] + 1,
    })
}

export function countDown(state, setState, fruit) {
    if (state[fruit] >= 1) {
        setState({
            ...state,
            [fruit]: state[fruit] - 1,
        })
    }
}

export function countReset(setState) {
    setState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    })
}