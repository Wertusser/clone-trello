import { initialState } from '../reducers'

export const FETCH_LISTS = "FETCH_LISTS"
export const ADD_LIST = "ADD_LIST"
export const ADD_CARD = "ADD_CARD"
export const MOVE_CARD = "MOVE_CARD"
export const MOVE_LIST = "MOVE_LIST"
export const DELETE_CARD = "DELETE_CARD"
export const DELETE_LIST = "DELETE_LIST"
export const EDIT_CARD = "EDIT_CARD"
export const REORDER_CARD = "REORDER_CARD"

export function fetchLists() {
    return (dispatch) => {
        const { lists } = initialState
        dispatch(fetchListsSuccess(lists))
    }
};

export function fetchListsSuccess(lists) {
    return {
        type: FETCH_LISTS,
        lists
    }
};

export function addList(list) {
    return (dispatch) => {
        dispatch(addListSuccess(list))
    };
};

export function addListSuccess(list) {
    return {
        type: ADD_LIST,
        list
    };
};

export function addCard(card) {
    return (dispatch) => {
        dispatch(addCardSuccess(card))
    };
};

export function addCardSuccess(card) {
    return {
        type: ADD_CARD,
        card
    };
};

export function editCard(card) {
    return (dispatch) => {
        dispatch(editCardSuccess(card))
    };
}

export function editCardSuccess(card) {
    return {
        type: EDIT_CARD,
        card
    };
};

export function reorderCard(cards) {
    return (dispatch) => {
        dispatch(reorderCardSuccess(cards))
    };
}

export function reorderCardSuccess(cards) {
    return {
        type: REORDER_CARD,
        cards
    };
};