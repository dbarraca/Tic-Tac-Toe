import React from 'react';
import './Piece.css';

class Piece extends React.Component {
render() {
    return <div class="piece" draggable="true" ondragstart="drag(event)"></div>;
}
}
export default Piece;