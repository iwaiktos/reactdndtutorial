'use strict';

import * as types from '../actionTypes';

export function moveKnight(toX, toY) {
  return {
    type: types.MOVE_KNIGHT,
    toX,
    toY
  };
}
