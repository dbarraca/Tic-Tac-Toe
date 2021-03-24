import React from 'react';
import './Piece.css';

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

class Piece extends React.Component {

render() {
    return <div class="piece" draggable="true" ondragstart="drag(event)"></div>;
}
}
export default Piece;