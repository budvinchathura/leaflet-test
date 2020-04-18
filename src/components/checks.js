import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import {add_marker} from '../redux/actions'



export function Checkboxes() {

    const dispatch = useDispatch();

    const ma = {
        lat:-35.42258,
        lng:149.2376973
    }

    const mb = {
        lat:-35.42653,
        lng:149.2301903
    }

    const [checkeda, setCheckeda] = React.useState(false);

    const handleChangea = event => {
        setCheckeda(event.target.checked);
        if(event.target.checked){
            dispatch(add_marker('a',ma))
        }else{
            dispatch(add_marker('a',undefined))
        }
    };


    const [checkedb, setCheckedb] = React.useState(false);

    const handleChangeb = event => {
        setCheckedb(event.target.checked);
        if(event.target.checked){
            dispatch(add_marker('b',mb))
        }else{
            dispatch(add_marker('b',undefined))
        }
    };

    return (
        <div>
            other locations
            <Checkbox
                checked={checkeda}
                onChange={handleChangea}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />


            <Checkbox
                checked={checkedb}
                onChange={handleChangeb}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />


           

        </div>
    );
}
