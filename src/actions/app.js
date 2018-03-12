// @flow
import { DIALOG_HIDE, DIALOG_SHOW } from './../constants/action-types';
import type { AppAction } from 'actions/app.js.flow';

export const showDialog = (): AppAction => ({
  type: DIALOG_SHOW
});

export const hideDialog = (): AppAction => ({
  type: DIALOG_HIDE
});
