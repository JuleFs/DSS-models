import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimplexService } from '../../services/simplex.service';

@Component({
  selector: 'app-simplex',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './simplex.component.html',
  styles: ``
})
export class SimplexComponent {
  sueldo: number = 0; // Sueldo mensual
  aguinaldo: number = 0; // Aguinaldo anual
  costoProducto: number = 0; // Costo del producto
  proceso: 'Max' | 'Min' = 'Max'; // Proceso predeterminado (Maximización o Minimización)
  resultado: string | null = null; // Resultado de la simulación

  constructor(private simplexService: SimplexService) {}

  calcular(): void {
    // Validación de los inputs
    if (this.sueldo <= 0 || this.aguinaldo <= 0 || this.costoProducto <= 0) {
      alert('Por favor, ingresa valores válidos para sueldo, aguinaldo y costo del producto.');
      return;
    }

    // Asegurarse de que los valores sean float
    const sueldoFloat = parseFloat(this.sueldo.toString());
    const aguinaldoFloat = parseFloat(this.aguinaldo.toString());
    const costoProductoFloat = parseFloat(this.costoProducto.toString());

    // Crear las restricciones basadas en los datos del usuario
    const matrizRestricciones: number[][] = [
      [1.0, 0.0, sueldoFloat],  // Restricción del sueldo
      [0.0, 1.0, aguinaldoFloat] // Restricción del aguinaldo
    ];

    // Crear la función objetivo con el costo del producto
    const funcionObjetivo: number[] = [-costoProductoFloat, -costoProductoFloat];

    // Crear el JSON que será enviado al backend
    const datos = {
      Matriz: matrizRestricciones,
      Arreglo: funcionObjetivo,
      Texto: this.proceso // Puede ser 'Max' o 'Min'
    };

    // Enviar datos al servicio
    this.simplexService.enviarParametros(datos).subscribe({
      next: (response) => {
        this.resultado = response.Mensaje; // Mostrar el resultado devuelto por el backend
      },
      error: (err) => {
        console.error('Error al procesar los datos:', err);
        alert('Hubo un error al procesar los datos.');
      }
    });
  }
}
//   .map((valor) => parseFloat(valor.trim()));
