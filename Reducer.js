export const initialState = {
    basket: [],
    
}
export const getBasketTotal =  (basket) => 
basket?.reduce((amount, item ) => item.price + amount, 0);

function reducer(state,action) {
    console.log(action)
    switch(action.type){
        case "Add to Basket":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
            
        case "Remove from Basket":
            // logic for removing item from basket 
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // item exist in basket remove it ...
                newBasket.splice(index,1);
            } else {
                console.warn(`cant remove product (id: ${action.id}
                as its move`)
            }
            return {...state,
              basket: newBasket,
            };

    
            default:
                return state;
    }   
}

export default reducer;