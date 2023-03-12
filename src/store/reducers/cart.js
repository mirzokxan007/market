let initialValue = {
    items:[],
    total:23432,
}

function cartReducer(state = initialValue,action) {
  switch(action.type){
    case "ADD_TO_CART":{
        return{
            ...state,
            items:[...state.items,{
                product:action.payload,
                count:1,
            }],
        };
    }
  
  case "INC_ITEM_COUNT"  : {
    return {
        ...state,
        items: state.items.map(i => i.product.id === action.payload ? { ...i,count: i.count === 9 ? 9:i.count +1 }: i),
    }
  }
  case "DEC_ITEM_COUNT"  : {
    return {
        ...state,
        items: state.items.map(i => i.product.id === action.payload ? { ...i,count:i.count === 1 ? 1: i.count -1 }: i),
    }
  }

  case "REMOVE_CART":{
    return{
        ...state,
        items: state.items.filter((i) => i.product.id !== action.payload),
    };
  }

  default: {
    return state;
  }

 }
} ;



export default cartReducer;