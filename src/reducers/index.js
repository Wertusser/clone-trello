import * as actions from '../actions/index';

export const initialState = {
    lists: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case (actions.FETCH_LISTS): {
            return {
                ...state,
                lists: action.lists
            };
        }
        case (actions.ADD_LIST): {
            return {
                ...state,
                lists: state.lists.concat(action.list)
            };
        }
        case (actions.EDIT_CARD): {
            let lists = state.lists.map((list) => {
                if (list.id !== action.card.listId) {
                    return list;
                }
                let cards = (list.cards || []).map(e => {
                    if (e.id !== action.card.id) {
                        return e
                    }
                    e.text = action.card.text
                    return e
                })
                return {
                    ...list,
                    cards
                };
            });
            return { ...state, lists };
        }
        case (actions.ADD_CARD): {
            const lists = state.lists.map((list) => {
                if (list.id === action.card.listId) {
                    return {
                        ...list,
                        cards: (list.cards || []).concat(action.card)
                    };
                }
                return list;
            });
            return { ...state, lists };
        }
        default:
            return state;
    }
};

export default reducer;

