import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-members',
  imports: [FormsModule],
  templateUrl: './list-members.component.html',
  styles: ``
})
export class ListMembersComponent {

  private miembros:any[] = []
  dptID = "0"

  constructor(private datos:DatosService) { 
    this.getDpts
    // this.getMiembros()
  }

  getDpts() { return this.datos.getDpts() }
  getMiembros(departamento:string) { return this.datos.getMembers(departamento) }

  getDptId(dptID:string) {
  }
  



}
