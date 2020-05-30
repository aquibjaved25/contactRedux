
const initialUserState = {
    arr: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                arr: [...state.arr, action.newItem]
            }

        default:
            return state;
    }

}