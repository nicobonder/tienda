export const initialState = {
    basket: [],
    user: null,
};

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
};

export const getBasketTotal = (basket) => {
    return(
        basket?.reduce((amount, item) => (Number(amount)) + (Number(item.price)), 0)
    )
}

/*const GetFile = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <React.Fragment>
            {basket?.map((item) => (
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <a key={item.id} ebooks={item.file}>Libros</a>
                </Grid>
            ))}
        </React.Fragment>
    );
}
*/

/*export const downloadEbook = () => {
    axios({
        url: GetFile,
        method: 'GET',
        responseType: 'blob'
  })
        .then((response) => {
              const url = window.URL
                    .createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'ebook.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
        })
}
*/

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            case "REMOVE_ITEM":
                const index = state.basket.findIndex((basketItem=> basketItem.id === action.id))
                let newBasket = [...state.basket];
                if (index>=0){
                    newBasket.splice(index, 1)
                } else{
                    {console.log("No puedo borrar el producto")}
                }

                return{
                    ...state,
                    basket: newBasket,
                };
                case "SET_USER":
                return {
                    ...state,
                    user: action.user
                };
                case "EMPTY_BASKET":
                    return {
                        ...state,
                        basket: action.basket
                    }
            default: return state;
    }
}

export default reducer;