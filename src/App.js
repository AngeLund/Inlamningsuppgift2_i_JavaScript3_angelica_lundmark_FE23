import logo from './logo.svg';
import './App.css';
import Cell from './Components/Cell';
import createBoard from './utils/utils.js';

function App() {
  const se = {
    index: 0,
    hasMine: false,
    numberOfNeighbouringMines: 0,
    visible: false}
  const board = createBoard(25,10);


  return (
    <div className="wrapper">
     {board.map((cellobject) => <Cell cell={cellobject}/> )}
    </div>
  );
}

export default App;
