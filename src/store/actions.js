import {RECEIVE_LIST,MOVIES_ARR} from './mutation-type';
import listData from '../datas/list-data.js'


export default{
	getList({commit}){
		//触发对应的mutations
		commit(RECEIVE_LIST,listData)
	},
	getMoviesArr({commit},data){
		commit(MOVIES_ARR,data)
	}
}