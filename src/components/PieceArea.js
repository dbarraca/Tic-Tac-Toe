import React from 'react';
import Piece from './Piece';
import './PieceArea.css';

class PieceArea extends React.Component {
render() {
    return <div class="piecesWrap">
        <h2 class="piecesTitle">Your Pieces</h2>

            <div class="piecesContainer">
                <Piece></Piece>
                <Piece></Piece>
                <Piece></Piece>
                <Piece></Piece>
                <Piece></Piece>
            </div>
        </div>;
}
}
export default PieceArea;