import { DIRECTIONS, OBJECT_TYPE} from './setup';

// Primitive random movement
export function randomMovement(postition, direction, objectExist){
    let dir = direction;
    let nextMovePos = postition + dir.movement;
    //Create an array from the directions object keys
    const keys = Object.keys(DIRECTIONS);

    while(
        objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ){
        //Get random key from the key array
        const key = keys[Math.floor(Math.random() * keys.length)];
        // set next move
        dir = DIRECTIONS[key];
        //set next move
        nextMovePos = postition + dir.movement;
    }
    return { nextMovePos, direction: dir};
}