import map_center_reducer from './map_center'
import markers_reducer from './markers'

import {combineReducers} from 'redux'

const all_reducers = combineReducers({
    map_center:map_center_reducer,
    markers:markers_reducer
})

export default all_reducers;