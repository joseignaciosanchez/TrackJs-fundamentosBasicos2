/*
EJERCICIO 1
Tamaño Grande - Dado un array, escribe una función que cambie 
todos los números positivos en él, por el string “big”. 
Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
*/
var arr = [-1,3,5,-5];
function reempPositiv(x){						
	for(i = 0; i < x.length; i++){					
		if(x[i] > 0){				
		x[i] = "big";				
		}				
	}					
return x;						
}
var y = reempPositiv(arr);						
console.log(y);
/*
EJERCICIO 2
Imprime (print) el menor, devuelve (return) el mayor - Crea una 
función que tome un array de números. La función debería imprimir 
(print) el menor valor del array, y devolver (return) el mayor. 
*/
var arr = [-10,8,23,-5];      
function printMenRetMay(x){	    	      		  		
	var numMen = x[0];  
    var numMay = x[0];				
    for ( i = 0; i < x.length; i++) {	     		
        if(x[i] < numMen){            
            numMen = x[i];                               
        }	
        if(x[i] > numMay){		
            numMay = x[i];	            
        }         
    }
    console.log(numMen);          	
    return numMay;	
}
var y = printMenRetMay(arr);						
console.log(y);
/*
EJERCICIO 3
Imprime (print) uno, devuelve (return) otro- Crea una función 
para un array de números. La función debería imprimir (print) 
el penúltimo valor y devolver (return) el primer valor impar.
*/
var arr = [3,5,7,9,12]; 
function printUnoRet(x){
    var numImpar = 0;
        for(i = 0; i < x.length; i++){
            if(x[i] % 2 != 0){                
                numImpar = x[i];
                break;
            }
        }
        console.log(x[x.length-2]); 
        return numImpar;
}
y = printUnoRet(arr);
console.log(y);
/*
EJERCICIO 4
Doble Visión - Dado un array, crea una función que devuelva un 
nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) 
debiera devolver [2, 4, 6] sin cambiar el array original. 
*/
var arr = [1,2,3];
function dobleVision(x){
    var arrAux =[];
    for(i = 0; i < x.length; i++){
        x[i] = x[i]*2;
        arrAux.push(x[i]);
    }     
    return arrAux;
 }
 y = dobleVision(arr);
 console.log(y);
 /*
 EJERCICIO 5
 Contar Positivos -  Dado un array de números, crea una función 
 para reemplazar el último valor con el número de valores positivos 
 encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) 
 cambia el array original y devuelve [-1,1,1,3].
 */
 var arr = [-1,1,1,1];
 function contPositiv(x){
     var cont = 0;
     for(i = 0; i < x.length; i++){
         if(x[i] > 0){
             cont++;
         }
     }
     x.pop();
     x.push(cont);     
     return x;
  }
  y = contPositiv(arr);
  console.log(y);
  /*
  EJERCICIO 6
  Pares e Impares - Crea una función que acepte un array. Cada vez 
  que ese array tenga 3 valores impares seguidos, imprime (print) 
  “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, 
  imprime (print) “¡Es para bien!”.
   */
var arr = [-1,2,2,2,1,1];       
function contPositiv(x){ 
    var cont = 0;
    var cont2 = 0;
        for(i = 0; i < x.length; i++){
            if(x[i] % 2 == 0){
                cont++;
                cont2 = 0;
                if(x[i] % 2 == 1){
                    cont = 0;
                }
                if(cont == 3){
                    console.log("¡Es para bien!");
                }
            }
            else if(x[i] % 2 == 1){
                cont2++;
                cont = 0;
                if(x[i] % 2 == 0){
                    cont2 = 0; 
                }
                if(cont2 == 3){
                    console.log("¡Qué imparcial!");
                }
            }
        }
}
contPositiv(arr); 
  /*
  EJERCICIO 7
Incrementa los Segundos - Dado un array de números arr, agrega 1 a 
cualquier otro elemento, específicamente a aquellos cuyo índice es 
impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor 
del array y devuelve arr. 
  */
var arr = [0,1,2,3,4,5];
function incrSeg(x){
    var arrAux = [];
    var valorImp = 1;
        for(i = 0; i < x.length; i++){
            if(x[i] % 2 != 0){                
                x[i]+=valorImp;                                
            }
            arrAux.push(x[i]);
            console.log(x[i]);
        }         
        return arrAux;
}
y = incrSeg(arr);
console.log(y);
  /*
  EJERCICIO 8
Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ 
o ‘dado un array’) que contiene strings, reemplaza cada string con un 
número de acuerdo cantidad de letras (longitud) del string anterior. 
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería 
devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
  */
var arr = ["programar","dojo", "genial"];
function longPrevias(x){
    var arrAux = [arr[0]];
    var numCarElem = 0;
    for(i = 0; i < x.length; i++){
        numCarElem = x[i].length;
        arrAux.push(numCarElem);        
    }
    arrAux.pop();
    return arrAux;
}
z = longPrevias(arr);
console.log(z); 
  /*
  EJERCICIO 9
Agrega Siete - Construye una función que acepte un array. Devuelve un 
nuevo array con todos los valores del original, pero sumando 7 a cada 
uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) 
debería devolver [8,9,10] en un nuevo array. 
*/
var arr = [1,2,3];
function agregaSiete(x){
    var arrAux = [];
    var num = 7;
    for(i = 0; i < x.length; i++){
        x[i]+=num;
        arrAux.push(x[i]); 
    }
    return arrAux;
}
z = agregaSiete(arr);
console.log(z);
/*
EJERCICIO 10
Array Inverso - Dado un array, escribe una función que invierte sus valores en el 
lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores 
al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. 
(Pista: necesitarás intercambiar (swap) valores).
*/
var arr = [3,1,6,4,2];
function invertirArray(x){
    var aux = 0;
    for (i = 0; i < x.length/2; i++) {
        aux = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = aux;
    }
    return x;
}
console.log(invertirArray(arr));
/*
EJERCICIO 11
Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos 
los valores del array original, pero negativos (no simplemente multiplicando por -1). 
Dado [1,-3,5], devuelve [-1,-3,-5].
*/
var arr = [1,-3,5];
function reempPositiv(x){						
	for(i = 0; i < x.length; i++){					
		if(x[i] > 0){				
		x[i] = -(x[i]);				
		}				
	}					
return x;						
}
var y = reempPositiv(arr);						
console.log(y);
/*
EJERCICIO 12
Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada 
vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime 
“tengo hambre” una vez. 
*/
var arr = [1,2,3,4];      
function siempreHambr(x){		 	
  var tieneComida = false;
	for(i = 0; i < x.length; i++){					  
        if(x[i] == "comida"){    
          console.log("Yumy");
          tieneComida = true;            
        }        
	} 	
    if(tieneComida == false){
        console.log("Tengo Hambre");            
    }								
}
siempreHambr(arr); 
/*
EJERCICIO 13
Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el 
ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el 
array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array 
a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
*/
var arreglo_1=[1,2,3,4,5,6,7,8,9,10,12];//1
var largo = arreglo_1.length;//largo
//console.log(largo);
var arreglo_2=[];//arreglo aux
for(var indice = 0;indice<largo;indice++){//recorrer arreglo    
    if(indice % 2 ==0){//Par
        var elemento = arreglo_1[largo-(indice+1)];
        arreglo_2.push(elemento);       
    }
    else{//Impar
        var elemento = arreglo_1[indice];
        arreglo_2.push(elemento);
    }    
}
console.log(arreglo_2);
/*
EJERCICIO 14
Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array 
arr por el número num, y devuelve el array arr modificado. Por ejemplo, 
escalaArray([1,2,3], 3] debería devolver [3,6,9].
*/
var arr = [1,2,3];
function escalArray(x){
    var arrAux = [];
    var num = 3;
    for(i = 0; i < x.length; i++){
        x[i] = x[i]*num;
        arrAux.push(x[i]); 
    }
    return arrAux;
}
z = escalArray(arr);
console.log(z);