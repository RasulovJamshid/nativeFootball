import {combineReducers} from "redux";

export const initialState={
    items: [],
    articleData:'aaa',
    articleMod:false,
    isloading:true,
    isRefreshing:false
}
//Reducer
const items=(state=[],action)=>{
	switch(action.type){
		case 'FETCH':
			return action.payload;
		default : 
			return state
	}
}
//Action
const itemsAct =(response)=>{
	return{
		type:'FETCH',
		payload:response,
	}
}
//Reducer
const articleData=(state='aaa',action)=>{
    switch (action.type) {
        case "REQUEST":
            return action.payload;
        default:
            return state;
    }
}
//Action
const articleAct=(response)=>{
    return{
        type:'REQUEST',
        payload:response
    }
}

//Reducer
const articleMod=(state=false,action)=>{
    switch (action.type) {
        case 'TRUFALART':
            return action.payload;
        default:
            return state;
    }
}
//Action
const articleBool =(isX)=>{
	return{
		type:'TRUFALART',
		payload:isX
	}
}

//Reducer
const isloading =(state=true,action)=>{
    switch (action.type) {
        case 'TRUFALLOD':
            return action.payload;  
        default:
            return state;
    }
}
//Action
const loadAct =(response)=>{
	return{
		type:'TRUFALLOD',
		payload:response,
	}
}
//Reducer
const isRefreshing=(state=false,action)=>{
    switch (action.type) {
        case 'TRUFALFRESH':
            return action.payload;
        default:
            return state;
    }
}
//Action
const refreshAct=(response)=>{
    return{
        type:'TRUFALFRESH',
        payload:response
    }
}

export const allReducers=combineReducers({
    items,
    articleData,
    isRefreshing,
    isloading,
    articleMod
})
// const tate = {
//     items: [],
//     articleData:" ",
//     refreshing:false,
//     isArticleMode:false,
//     isLoading:false,
//   };














// let store =createStore(combined);

// const combined=combineReducers({
// 	counter:counter,
// 	boool:b
// })

// store.dispatch(increment());

// const selector = useSelector(state=>state.counter)
// // (
// // 	<Provider>
// // 	{selector}
// // 	<App/>
// // 	</Provider>
// //)
// const dispatch = useDispatch ();

// dispatch(increment());