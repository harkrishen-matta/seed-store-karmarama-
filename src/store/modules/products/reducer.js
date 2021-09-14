const INITIAL_STATE = {
    Products: [],
    loading: true,
};
export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS": {
            return {
                ...state,
                Products: action.products.sort((a,b) => a.order-b.order),
                loading: false
            };
        }
        default:
            return state;
    }
}
