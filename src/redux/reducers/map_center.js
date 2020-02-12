const deafult_center = {
    lat: -35.422213,
    lng: 149.235797
}

const map_center_reducer = (map_center = deafult_center, action) => {
    switch (action.type) {
        case 'SET_CENTER':
            return action.payload
        default:
            return map_center
    }
}

export default map_center_reducer;