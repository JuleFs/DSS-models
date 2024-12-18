import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MineriaComponent } from './components/mineria/mineria.component';
import { SimplexComponent } from './components/simplex/simplex.component';
import { SawComponent } from './components/saw/saw.component';
import { RedesNeuronalesComponent } from './components/redes-neuronales/redes-neuronales.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'simplex', component: SimplexComponent },
        { path: 'saw', component: SawComponent },
      { path: 'mineria', component: MineriaComponent },
        { path: 'redes_neuronales', component: RedesNeuronalesComponent },
      { path: '', redirectTo: 'simplex', pathMatch: 'full' },
    ],
  },
];
