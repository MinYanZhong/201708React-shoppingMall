/**
 * Created by L on 2017/11/20.
 */
import * as types from '../action-types';
import {fetchHomeData} from '../../api/home'
export default {
    getHomeDate(){
        return dispatch=>{
            fetchHomeData().then(sliders=>{
                dispatch({
                    type:types.GETHOMEDATA,
                    payload:sliders.data.pageModules
                })

            })
        }

    }
}