# Code Challenge: ChessKnight

Dada la posición de un caballo en el tablero de ajedrez estándar, 
encuentre el número de movimientos diferentes que puede realizar el caballo.

### Movimiento del Caballero
El caballero puede moverse a un cuadrado que tiene dos cuadrados 
horizontalmente y un cuadrado verticalmente, o dos cuadrados verticalmente 
y un cuadrado horizontalmente alejado de él. Por lo tanto, el movimiento 
completo se parece a la letra L. 

Consulte la imagen de abajo para ver todos los movimientos válidos para una pieza de 
caballo que se coloca en uno de los cuadrados centrales.

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fchessknight.jpg?alt=media&token=5e8d20d4-fb22-497a-bf39-919f1412ea46)

### Coordenadas en tablero de Ajedrez
La posición de una celda en el tablero de ajedrez se identifica mediante una coordenada alfanumérica.

El eje horizontal o eje X se identifica con una letra entre la "A" y la "H" (A,B,C,D,E,F,G,H)
El eje vertical o eje Y se identiica con un numero entre el "1" y el "8" (1,2,3,4,5,6,7,8)
Por ejemplo: "A1", "G7", "F3"

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FtablerAjedrez.jpg?alt=media&token=d6ba9a45-7646-49a1-b7c2-45138e9df7fd)

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: cell
- **tipo**: String

## Salida

- **tipo**: Number (Integer)

## Ejemplo
Para celda = "A1", la salida debe ser = 2.  

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FchessKnight-ex1.jpg?alt=media&token=1476ef5d-d316-4ab2-a1f1-0a81acb7de92)

---
Para celda = "C2", la salida debe ser = 6.  

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FchessKnight-ex2.jpg?alt=media&token=53085141-d5f4-4b6b-8eae-1ac65617bcef)

## Tests

### Test 1  

- **Parametros**: (cell = "A1")  
- **Resultado esperado**: 2
---
### Test 2  

- **Parametros**: (cell = "C2")  
- **Resultado esperado**: 6
---
### Test 3  

- **Parametros**: (cell = "B1")  
- **Resultado esperado**: 3
---
### Test 4  

- **Parametros**: (cell = "F1")  
- **Resultado esperado**: 4

---
### Test 5    

- **Parametros**: (cell = "H4")  
- **Resultado esperado**: 4
---
### Test 6   

- **Parametros**: (cell = "G7")  
- **Resultado esperado**: 4
---
### Test 7   

- **Parametros**: (cell = "D5")  
- **Resultado esperado**: 8
---
### Test 8 

- **Parametros**: (cell = "E3")  
- **Resultado esperado**: 8
