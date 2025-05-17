import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-list-dpt',
  imports: [],
  templateUrl: './list-dpt.component.html',
  styles: ``
})
export class ListDPTComponent {

  // dpts:any[] = []

  constructor(private datos:DatosService) {
    this.getDpts()
  }

  getDpts() { return this.datos.getDpts()}

}
