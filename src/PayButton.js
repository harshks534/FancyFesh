import axios from "axios";
import {useSelector} from ' react-redux';
import {url} from '../slices/api'

const PayButton=() =>{
    return (
        <>
            <button onClick={()=> handleCheck()}>Check Out</button>
        </>
    )
}