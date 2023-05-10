let nums= [ 34,25,6,89,5,6,7,34,7,99,6];
let nums2 =  [15,25,2000,500,20,19,22,23,15,25];
let palabras =['Pais','Fruta','Viaje','Libro','Pais','Leer','Viaje'];


function BuscarRepetidos(array){
    let aux = [];


    for(let i = 0;i < array.length; i++){
        for( let j = i + 1 ; j <  array.length; j++){
            if(array[i] === array[j]){
                let count = 0 

                for(let k = 0; k < aux.length;k++){
                    if(aux[k] === array[i]){
                        count++
                    }

                }


                if(count === 0 ){
                    aux.push(array[i]);

                }

            }

        }

    }

    return aux;

}