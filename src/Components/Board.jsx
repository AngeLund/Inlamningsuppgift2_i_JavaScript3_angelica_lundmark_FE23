import React from "react";
import Cell from "./Cell";
import createBoard from "../utils/utils";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const board = createBoard(props.boardSize, props.numberOfMines);
    this.state = {
      board: board,
      numberOfMines: props.numberOfMines
    };
  }
  render() {
    const handleClick = (cell) => {
      if (cell.hasMine === true) {
        alert("Game over");
      } else {
        const newBoardState = this.state.board.map((boardCell) => {
          if (boardCell === cell) {
            return {
              ...boardCell,
              visible: true,
            };
          }
          return boardCell;
        });
        
        const numberOfMines = newBoardState.filter((boardCell) => boardCell.visible === false);
        if(numberOfMines.length === this.state.numberOfMines){
          alert("Game Won");
        }

        this.setState({
          ...this.state,
          board: newBoardState,
        });
      }
    };

    return (
      <div className="wrapper">
        {this.state.board.map((boardCell) => (
          <Cell
            key={boardCell.index}
            cell={boardCell}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Board;
