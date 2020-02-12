export const set_center = (center) => {
    return {
        type: 'SET_CENTER',
        payload: center
    }
}

export const add_marker = (index, marker)=>{
    switch (index) {
        case 'a':
            return {
                type: 'SET_A',
                payload: marker
            }
        case 'b':
            return {
                type: 'SET_B',
                payload: marker
            }

        case 'c':
            return {
                type: 'SET_C',
                payload: marker
            }

    }
}