import React from 'react';
import './GridSpot.css';

function allowDrop(ev) {
    ev.preventDefault();
}
        
function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}

class GridSpot extends React.Component {

render() {
    return <div class="gridSpot" ondrop="drop(event)" ondragover="allowDrop(event)"></div>;
}
}

export default GridSpot;