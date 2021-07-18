const GRID = {
    gridWidth: 100,
    gridCols: 10,
    gridRows: 10,
    get gridHeight() {
        return this.gridWidth;
    }, //square
    get marginX() {
        return Math.ceil(this.gridWidth * .1);
    },
    get marginY(){
        return this.marginX;
    },
    get gridEntireWidth() {
        return (this.gridCols * this.gridWidth) + ((this.gridCols + 1) * this.marginX);
    },
    get gridEntireHeight() {
        return (this.gridRows * this.gridHeight) + ((this.gridRows + 1) * this.marginY);
    }
};


export {GRID}