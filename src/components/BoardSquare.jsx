' use strict';

import {DropTarget} from 'react-dnd';
import {ItemTypes} from '../Constants';
import PropTypes from 'prop-types';
import React from 'react';
import Square from './Square';
import {canMoveKnight} from '../utils';

const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.knightX, props.knightY, props.x, props.y);
  },
  drop(props) {
    props.moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends React.Component {
  renderOverlay(color) {
    console.log(`(x, y, color) = (${this.props.x}, ${this.props.y}, ${color})`);
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color
      }}></div>
    );
  }
  render() {
    const {x, y, connectDropTarget, isOver, canDrop} = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  moveKnight: PropTypes.func.isRequired,
  knightX: PropTypes.number.isRequired,
  knightY: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func,
  isOver: PropTypes.bool,
  canDrop: PropTypes.bool
};
