function Cell({ cell, handleClick }) { 
  if (cell.visible === false) {
    return (
      <div className="box" onClick={() => handleClick(cell)}>
        <p>?</p>
      </div>
    );
  }
  return (
    <div className="box">
      <p>{cell.numberOfNeighbouringMines}</p>
    </div>
  );
}

export default Cell;
