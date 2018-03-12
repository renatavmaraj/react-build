// @flow
import { DIALOG_HIDE, DIALOG_SHOW } from 'constants/action-types';
import type { Action } from 'types/Action';

type State = {
  isDialogOpen: boolean
};

const initialState = {
  isDialogOpen: false
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case DIALOG_SHOW:
      return {
        ...state,
        isDialogOpen: true
      };
    case DIALOG_HIDE:
      return {
        ...state,
        isDialogOpen: false
      };
    default:
      return state;
  }
};
