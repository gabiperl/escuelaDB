import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private dpts:any[] = []

  urlDpts = 'http://localhost/escuelaDB/getDpts.php'

  
  // POR QUÉ NO FUNCIONA ASÍ?
  // urlMembers = http://localhost/escuelaDB/getMembers.php?departamento='+departamento

  constructor(private http:HttpClient) {
    this.http.get(this.urlDpts).subscribe((res:any) => {this.dpts = res})
  }

  getDpts() {return this.dpts }
  getMembers(departamento:string) {return this.http.get('http://localhost/escuelaDB/getMembers.php?departamento='+departamento) }

  addDpt(newDpt:string, newDesc:string) {
    let params = 
    {
      nombre_departamento: newDpt,
      descripcion: newDesc
    }
    return this.http.post('http://localhost/escuelaDB/insertDpt.php', params)}

    // SI fuese por GET, se pondría ? tras el enlace

    // return this.http.post('http://localhost/escuelaDB/insertDpt.php', {nombre_departamento:   newDpt, descripcion: newDesc})
}
