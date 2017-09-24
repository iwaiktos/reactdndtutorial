'use strict';

import * as types from '../actionTypes';
import {canMoveKnight} from '../utils';

const initialState = {
  knightX: 1,
  knightY: 7
};

export default function position(state = initialState, {type, toX, toY} = {}) {
  switch (type) {
    case types.MOVE_KNIGHT:
      if (canMoveKnight(state.knightX, state.knightY, toX, toY)) {
        return {
          ...state,
          knightX: toX,
          knightY: toY
        };
      }
      return state;
    default:
      return state;
  }
}
