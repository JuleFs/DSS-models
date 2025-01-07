import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PerceptronService } from '../../services/perceptron.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-redes-neuronales',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './redes-neuronales.component.html',
  styles: ``
})
export class RedesNeuronalesComponent {
  constructor(private perceptronService: PerceptronService) {}
  values: any;
  price = 0.0;
  storage = 0.0;
  usage: any;

  sumbit() {
    this.values = {"price_euros": this.price, "primary_storage": this.storage};
    console.log(this.values);
    this.perceptronService.getUsage(this.values).subscribe({
      next: (data) => {
        if (data) {
          this.usage = data;
          if (this.usage == 'student') {
            this.usage = 'Según el análisis por IA, el potencial uso del equipo es para uso estudiantil';
          } else { 
            this.usage = 'Según el análisis por IA, el potencial uso del equipo es para uso profesional';
          }
        } else {
          this.usage = 'No se determinó el uso del equipo';
        }
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

}
