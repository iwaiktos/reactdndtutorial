'use strict';

import BoardSquare from './BoardSquare';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Knight from './Knight';
import PropTypes from 'prop-types';
import React from 'react';

@DragDropContext(HTML5Backend)
export default class Board extends React.Component {
  renderPiece(x, y) {
    const {knightX, knightY} = this.props;
    if (x === knightX && y === knightY) {
      return <Knight/>;
    }
  }
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
        style={{
          width: '12.5%',
          height: '12.5%'
        }}>
        <BoardSquare
          x={x}
          y={y}
          moveKnight={this.props.moveKnight}
          knightX={this.props.knightX}
          knightY={this.props.knightY}
        >
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightX: PropTypes.number.isRequired,
  knightY: PropTypes.number.isRequired
};
