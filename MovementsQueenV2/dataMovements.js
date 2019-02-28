resource = {
    /*  Uso de las propiedades:
        movements: Almacena el resultado, los movimientos que puede realizar la reina en esa dirección
        condition : Se usa en la validación para saber si el obstaculo obstruye el movimiento de la reina
        result : Arreglo que contiene las operaciones, en posición 0 la operación para cuando hay un obstáculo y en posición 1 para cuando no
        i y j: Para increcementar o decrementar los valores que se utilizan en un ciclo, que ayuda a calcular s hay un obstáculo en un movimiento diagonal
    */
    left: {
        movements: 0,
        condition: "obs.left[0] === pos[0] && pos[1]>obs.left[1]",  
        result: ["pos[1]-obs.left[1]-1", "pos[1]"]
    },
    leftUp:{
        movements: 0,
        conditionWhile: "j>0",
        condition: "obs.leftUp[0] === i && obs.leftUp[1] === j",
        result: ["pos[0]>pos[1] ? pos[1] -obs.leftUp[1]-1 : pos[0] - obs.leftUp[0]-1",
            "pos[0]>pos[1] ? pos[1] : pos[0]"],
        i: -1,
        j: -1
    },
    up:{
       movements: 0,
       condition: "obs.up[1] === pos[1] && pos[0]>obs.up[0]",
       result: ["pos[0]-obs.up[0]-1", "pos[0]"]
    },
    rightUp:{
        movements: 0,
        conditionWhile: "j<7",
        condition: "obs.righthUp[0] === i && obs.righthUp[1] === j",
        result: ["(7-pos[1]) <=  pos[0] ? obs.righthUp[1]-pos[1]-1 : pos[0]-obs.righthUp[0]-1",
            "(7-pos[1]) <=  pos[0] ? 7-pos[1] : pos[0]"],
        i: -1,
        j: 1
    },
    right:{
        movements: 0,
        condition: "obs.right[0] === pos[0] && pos[1]<obs.right[1]",
        result: ["(obs.right[1]-pos[1]-1)", "7-pos[1]"]
    },
    rightDown:{
        movements: 0,
        conditionWhile: "j<7",
        condition: "obs.rightDown[0] === i && obs.rightDown[1] === j",
        result: ["pos[0] > pos[1]  ? obs.rightDown[0] - pos[0] - 1 : obs.rightDown[1] -pos[1] - 1",
            "pos[0] > pos[1] ? 7 - pos[0] : 7 -pos[1]"],
        i: 1,
        j: 1
    },
    down:{
        movements: 0,
        condition: "obs.down[1] === pos[1] && pos[0]<obs.down[0]",
        result: ["(obs.down[0]-pos[0]-1)", "7-pos[0]"]
    },
    leftDown:{
        movements: 0,
        conditionWhile: "i<7 && j > 0",
        condition: "obs.leftDown[0] === i && obs.leftDown[1] === j",
        result: ["(7-pos[1]) >= pos[0] ? pos[1]-obs.leftDown[1] -1 : obs.leftDown[0]-pos[0]-1",
            "(7-pos[1]) >= pos[0] ? pos[1] : 7-pos[0]"],
        i: 1,
        j: -1
    }    
};