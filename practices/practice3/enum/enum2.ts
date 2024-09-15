enum MOVE_DIRECTION {
    North = 'North', // key=0 // по умолчанию key=0, но если написать North = 2, то ket East будет равняться 5
    South = 'South', // key=1 // если написать South = 0, то ket East будет равняться 2. Но лучше проставлять все значения вручную
    West = 'West', // key=2
    East = 'East' // key=3, key = 'East'
}

MOVE_DIRECTION.East; // 3
MOVE_DIRECTION[3]; //East

const response = { direction: 'East'};