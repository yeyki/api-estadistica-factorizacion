import { EstadisticaFactorizacion } from "../entities/EstadisticaFactorizacion";
import { FactorizacionMatriz } from "../entities/FactorizacionMatriz";

export async function estadisticaMatriz(
  factorizacion: FactorizacionMatriz
): Promise<EstadisticaFactorizacion> {
  const valorMaximo = valorMaximoMatrices(
    factorizacion.matrizQ,
    factorizacion.matrizR
  );
  const valorMinimo = valorMinimoMatrices(
    factorizacion.matrizQ,
    factorizacion.matrizR
  );
  const promedio = promedioMatrices(
    factorizacion.matrizQ,
    factorizacion.matrizR
  );
  const sumaTotal = sumaTotalMatrices(
    factorizacion.matrizQ,
    factorizacion.matrizR
  );
  const matrizDiagonal = identificarMatrizDiagonal(
    factorizacion.matrizQ,
    factorizacion.matrizR
  );

  const resultado: EstadisticaFactorizacion = {
    valorMaximo,
    valorMinimo,
    promedio,
    sumaTotal,
    matrizDiagonal,
  };

  return resultado;
}

function valorMaximoMatrices(matriz1: number[][], matriz2: number[][]): number {
  let valorMaximo = -Infinity;

  // Buscar el valor máximo en una matriz
  const buscarMaximoEnMatriz = (matriz: number[][]) => {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > valorMaximo) {
          valorMaximo = matriz[i][j];
        }
      }
    }
  };

  // Buscar en ambas matrices
  buscarMaximoEnMatriz(matriz1);
  buscarMaximoEnMatriz(matriz2);

  return valorMaximo;
}

function valorMinimoMatrices(matriz1: number[][], matriz2: number[][]): number {
  let valorMinimo = Infinity;

  // Buscar el valor mínimo en una matriz
  const buscarMinimoEnMatriz = (matriz: number[][]) => {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < valorMinimo) {
          valorMinimo = matriz[i][j];
        }
      }
    }
  };

  // Buscar en ambas matrices
  buscarMinimoEnMatriz(matriz1);
  buscarMinimoEnMatriz(matriz2);

  return valorMinimo;
}

function promedioMatrices(matriz1: number[][], matriz2: number[][]): number {
  let sumaTotal = 0;
  let contador = 0;
  let promedio = 0;

  // Sumar los valores de una matriz y contarlos
  const sumarYContarValoresMatriz = (matriz: number[][]) => {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        sumaTotal += matriz[i][j];
        contador++;
      }
    }
  };

  // Sumar y contar en ambas matrices
  sumarYContarValoresMatriz(matriz1);
  sumarYContarValoresMatriz(matriz2);

  // Calcular el promedio
  promedio = contador > 0 ? sumaTotal / contador : 0;

  return promedio;
}

function sumaTotalMatrices(matriz1: number[][], matriz2: number[][]): number {
  let sumaTotal = 0;

  // Sumar los valores de una matriz y contarlos
  const sumarValoresMatriz = (matriz: number[][]) => {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        sumaTotal += matriz[i][j];
      }
    }
  };

  // Sumar y contar en ambas matrices
  sumarValoresMatriz(matriz1);
  sumarValoresMatriz(matriz2);

  return sumaTotal;
}

function identificarMatrizDiagonal(
  matrizQ: number[][],
  matrizR: number[][]
): string {
  // Verificar si una matriz es diagonal
  const esDiagonal = (matriz: number[][]): boolean => {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (i !== j && matriz[i][j] !== 0) {
          return false;
        }
      }
    }
    return true;
  };

  // Identificar si ambas matrices son diagonales
  const esDiagonalMatriz1 = esDiagonal(matrizQ);
  const esDiagonalMatriz2 = esDiagonal(matrizR);

  if (esDiagonalMatriz1 && esDiagonalMatriz2) {
    return "Ambas";
  } else if (esDiagonalMatriz1) {
    return "matrizQ";
  } else if (esDiagonalMatriz2) {
    return "matrizR";
  } else {
    return "Ninguna";
  }
}
