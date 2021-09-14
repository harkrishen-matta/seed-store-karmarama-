import api from "../../../services/api";

export const GetProducts = () => {
    return dispatch => {
        api.get("/products")
            .then(res => {
                console.log(res);
                dispatch({
                    type: "GET_PRODUCTS",
                    products: res.data
                });
            });
    };
};
