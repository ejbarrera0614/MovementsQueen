// el nombre indica hacia que lado se ubica el obstáculo
// leftUp: Diagonal izquierda superior; rightUp: Diagonal derecha superior
// leftDown: Diagonal izquieda inferior: rightDown: diagonal derecha inferior
var obstacle = { left:[4,2], leftUp:[1,3], up:[0,6], righthUp:[3,7], right:[4,7], rightDown:[5,7],  down:[5,6], leftDown:[7,3] }
console.log("---->Movements for 4,6:\n");
posQueenObstacles([4,6], obstacle),

obstacle = { left:[4,0], leftUp:[0,2], up:[2,6], righthUp:[0,7], right:[4,7], rightDown:[6,7],  down:[7,5], leftDown:[0,7] }
console.log("---->Movements for 4,6:\n");
posQueenObstacles([4,6], obstacle)


obstacle = { left:[2,1], leftUp:[1,2], up:[0,4], righthUp:[1,4], right:[2,6], rightDown:[6,7],  down:[4,3], leftDown:[4,1] }
console.log("---->Movements for 2,3:\n");
posQueenObstacles([2,3], obstacle)


obstacle = { left:[4,0], leftUp:[3,0], up:[2,0], righthUp:[3,4], right:[7,4], rightDown:[5,2],  down:[7,3], leftDown:[5,0] }
console.log("---->Movements for 7,0:\n");
posQueenObstacles([7,0], obstacle)

/**
 * Solución Fase 1 y Fase 2
 * Las posiciones en el tablero son tomadas desde el 0 al 7 en ambos sentidos
 * @param {[Number, Number]} pos // Indica la posicion de la reina en sentido [y,x]
 * @param {Object} obs // Contiene la posición de los obstáculos
 */
function posQueenObstacles(pos, obs) {

    console.log("--->Obstacles:", obs) // Imprime el objeto con las posiciónes de los obstáculos

    var objs = resource; // Carga el objeto que esta en el archivo dataMovements.js

    // Se realiza la operación para los movimientos disponibles en cruz
    objs.left.movements = crossMovements(pos, obs, objs.left);
    objs.up.movements = crossMovements(pos, obs, objs.up);
    objs.right.movements = crossMovements(pos, obs, objs.right);
    objs.down.movements = crossMovements(pos, obs, objs.down);
    // Se realiza la operación para los movimientos disponibles en diagonal
    objs.leftUp.movements = diagonalMovements(pos, obs, objs.leftUp);
    objs.rightUp.movements = diagonalMovements(pos, obs, objs.rightUp);
    objs.rightDown.movements = diagonalMovements(pos, obs, objs.rightDown);
    objs.leftDown.movements = diagonalMovements(pos, obs, objs.leftDown);

    // Imprime el resultado
    printMovements(objs);
}

/**
 * Función para imprimir los movimientos disponibles hacia cada lado
 * @param {Object} objs // Contiene ya el resultado de los movimientos disponibles
 */
function printMovements(objs){
    // Ciclo para realizar la impresión
    for(key in objs){
        console.log("Movements to", key, "available:", objs[key].movements);
    }
}

/**
 * Función que determina los movimientos disponibles en cruz
 * El array pos y el objeto obs son usados en la conversion de la condición u operación almacenada 
 * en un string del objeto objs al usar la función eval()
 * Lo que son las operaciones y condicionales, también son transformados por medio de la función eval()
 * @param {Array} pos 
 * @param {Object} obs 
 * @param {Object} objs 
 */
function crossMovements(pos, obs, objs){

    //Con la función eval() realizo la condición en String que esta en el objeto
    if( eval(objs.condition) ){

        // Realiza la operación almacenada en el objeto
        var r = eval(objs.result[0]);
         // Si el resultado es negativo, retorna 0
        if(r<0){
          return 0;
        } else {
          return r;
        }
    } else {
        // Realiza la operación almacenada en el objeto si no hay algún obstáculo
        return eval(objs.result[1]);
    }

}

/**
 * Función que determina los movimientos disponibles en diagonal
 * El array pos y el objeto obs son usados en la conversion de la condición u operación almacenada 
 * en un string del objeto objs al usar la función eval()
 * Lo que son las operaciones y condicionales, también son transformados por medio de la función eval()
 * @param {Array} pos 
 * @param {Object} obs 
 * @param {Object} objs 
 */
function diagonalMovements(pos, obs, objs){

    var i = pos[0];
    var j = pos[1];

    /*En este ciclo se toma la posicion de la reina para ir pasando por cada
     posicion hacia la diagonal
    */
    while( eval(objs.conditionWhile) )
    {
        // dependiendo del valor en el objeto, incrementa o decrementa la i o la j
        i += objs.i;
        j += objs.j;
        
        // Valida si la posicion pasa por el obstáculo 
        if( eval(objs.condition) ){
            
            // Realiza la operación almacenada en el objeto
            var r = eval(objs.result[0]);             
            
            // Si el resultado es negativo, retorna 0
            if(r<0){
                return 0;
            } else {
                return r;//R
            }
        }       
    }     
    // Realiza la operación almacenada en el objeto si no hay algún obstáculo
    return eval(objs.result[1]); 

}