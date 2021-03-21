import React from 'react';

import './Grid.css';

class Grid extends React.Component {
render() {
    return <div class="grid">
            <div class="row">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
            <div class="row">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
            <div class="row">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </div>;
}
}
export default Grid;