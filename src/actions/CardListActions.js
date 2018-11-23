import * as types from '../constants/ActionTypes';

export function moveCard(to) {
    return {
        type: types.MOVE_CARD,
        to
    };
}

export function updateCardlist(id) {
    return {
        type: types.UPDATE_CARDLIST,
        id
    };
}