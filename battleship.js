class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    isSunk() {
        return this.length == this.hits;
    }

    hit() {
        this.hits += (this.isSunk()) ? 0 : 1;
    }
}