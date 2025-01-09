
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { Criterio } from '../../core/interfaces/laptop';
import { Alternativa } from '../../core/interfaces/laptop';
import { CriterioService } from '../../services/criterio.service';
import { AlternativaService } from '../../services/alternativa.service';
import { MejorAlternativaService } from '../../services/mejor-alternativa.service';


@Component({
  selector: 'app-saw',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './saw.component.html',
  styles: ``
})
export class SawComponent {
  nuevoCriterio: Criterio = { nombre: '', peso: 0, tipo: 'benefit' };
  nuevaAlternativa = {
    nombre: '',
    valores: '' // Temporalmente capturamos como string
  };

  mejorAlternativa: string | null = null;

  constructor(
    private criterioService: CriterioService,
    private alternativaService: AlternativaService,
    private mejorAlternativaService: MejorAlternativaService
  ) {}

  addCriterio(): void {
    if (!this.nuevoCriterio.nombre || this.nuevoCriterio.peso <= 0) {
      alert('Por favor, ingrese un nombre válido y un peso mayor que 0.');
      return;
    }

    this.criterioService.addCriterio(this.nuevoCriterio).subscribe({
      next: () => {
        alert('Criterio agregado exitosamente.');
        this.nuevoCriterio = { nombre: '', peso: 0, tipo: 'benefit' };
      },
      error: (err) => {
        console.error('Error al agregar criterio:', err);
        alert('Hubo un error al agregar el criterio. Por favor, inténtelo de nuevo.');
      }
    });
  }

  addAlternativa(): void {
    if (!this.nuevaAlternativa.nombre || !this.nuevaAlternativa.valores.length) {
      alert('Por favor, ingrese un nombre válido y valores separados por comas.');
      return;
    }

    // Convertir el string de valores (coma-separado) a un arreglo de números
    const valores = this.nuevaAlternativa.valores
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v)); // Elimina valores no numéricos

    if (valores.length < 2) {
      alert('Por favor, asegúrese de ingresar al menos 2 valores numéricos.');
      return;
    }

    const alternativaBody: Alternativa = {
      nombre: this.nuevaAlternativa.nombre,
      valores
    };

    this.alternativaService.addAlternativa(alternativaBody).subscribe({
      next: () => {
        alert('Alternativa agregada exitosamente.');
        // Reinicia el formulario
        this.nuevaAlternativa = { nombre: '', valores: '' };
      },
      error: (err) => {
        console.error('Error al agregar alternativa:', err);
        alert('Hubo un error al agregar la alternativa. Por favor, inténtelo de nuevo.');
      }
    });
  }


  calcularMejorAlternativa(): void {
    this.mejorAlternativaService.calcularMejorAlternativa().subscribe({
      next: (response) => {
        this.mejorAlternativa = response.mensaje;
        alert(`¡La mejor alternativa ha sido calculada: ${response.mensaje}`);
      },
      error: (err) => {
        console.error('Error al calcular mejor alternativa:', err);
        alert('Hubo un error al calcular la mejor alternativa. Por favor, inténtelo de nuevo.');
      }
    });
  }
}

