import React from 'react';
import GridSpot from './GridSpot';
import './Grid.css';

class Grid extends React.Component {
render() {
    return <div class="grid">
            <div class="row">
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
                
            </div>
            <div class="row">
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
            </div>
            <div class="row">
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
                <GridSpot></GridSpot>
            </div>
        </div>;
}
}
export default Grid;