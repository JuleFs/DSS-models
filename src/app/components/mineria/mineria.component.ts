import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SelectDropdownComponent } from "../select-dropdown/select-dropdown.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MineriaService } from '../../services/mineria.service';
import { Laptop } from "../../core/interfaces/laptop";

@Component({
  selector: 'app-mineria',
  standalone: true,
  imports: [NavbarComponent, SelectDropdownComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './mineria.component.html',
  styles: ``
})
export class MineriaComponent {
  values: any;
  laptops: Laptop[] = [];
  presupuesto: string = '';
  ram: string = '';
  storageType: string = '';
  storage: string = '';
  peso: string = '';
  inches: string = '';
  result: string = '';

  constructor(private mineriaService: MineriaService) {}

  sumbit() {
    this.values = {"presupuesto": this.presupuesto, "ram": this.ram, "storageType": this.storageType, "storage": this.storage, "peso": this.peso, "inches": this.inches};
    console.log(this.values);
    this.mineriaService.getLaptops(this.values).subscribe({
      next: (data) => {
        if (data) {
          this.laptops = data;
          this.result = this.formatLaptops(this.laptops);

          if (!this.laptops.length)
            this.result =
              'No se encontraron laptops que cumplan los criterios';
        } else {
          this.result = 'No laptops found';
        }
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  formatLaptops(laptops: Laptop[]): string {
    return laptops.map(laptop => 
      `${laptop.marca}, ${laptop.precio} euros, ${laptop.ram}gb, ${laptop.almacenamiento}gb, ${laptop.pantalla}", ${laptop.peso}kg`
    ).join('\n');
  }

  onPresupuestoChange(value: string): void {
    this.presupuesto = value;
  }
  
  onRamChange(value: string): void {
    this.ram = value;
  }

  onStorageTypeChange(value: string): void {
    this.storageType = value;
  }

  onStorageChange(value: string): void {
    this.storage = value;
  }

  onPesoChange(value: string): void {
    this.peso = value;
  }

  onInchesChange(value: string): void {
    this.inches = value;
  }

}
