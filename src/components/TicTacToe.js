import Grid from './Grid';
import PieceArea from './PieceArea';
import './TicTacToe.css';

function TicTacToe() {
  return (
      <div class="TicTacToe">
          <h1>Tic Tac Toe</h1>

          <PieceArea></PieceArea>
          <Grid></Grid>
          <PieceArea></PieceArea>
      </div>
  );
}

export default TicTacToe;