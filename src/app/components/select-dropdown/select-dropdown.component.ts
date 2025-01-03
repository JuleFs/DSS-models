import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './select-dropdown.component.html',
  styles: ``,
})
export class SelectDropdownComponent {
  @Input() spec: string = '';
  @Input() options: { value: any; label: string }[] = [];
  @Output() valueChange = new EventEmitter<string>();

  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.valueChange.emit(selectedValue);
  }
}
