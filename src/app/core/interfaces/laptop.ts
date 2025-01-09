export interface Laptop {
  marca: string;
  precio: string;
  ram: string;
  peso: string;
  almacenamiento: string;
  pantalla: string;
}

export interface Alternativa {
  nombre: string; // Nombre de la alternativa
  valores: number[]; // Valores de la alternativa
}


export interface Criterio {
  nombre: string; // Nombre del criterio
  peso: number;   // Peso del criterio
  tipo: 'benefit' | 'cost'; // Tipo del criterio (beneficio o costo)
}
//
