const markers_reducer = (markers = {}, action) => {
    switch (action.type) {
        case 'SET_A':
            return Object.assign({markers},{a:action.payload})
        case 'SET_B':
            return Object.assign({markers},{b:action.payload})
        case 'SET_C':
            return Object.assign({markers},{b:action.payload})
        default:
            return markers
    }
}

export default markers_reducer;