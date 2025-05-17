import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private dpts:any[] = []

  urlDpts = 'http://localhost/escuelaDB/getDpts.php'
  urlMembers = 'http://localhost/escuelaDB/getMembers.php'

  constructor(private http:HttpClient) {
    this.http.get(this.urlDpts).subscribe((res:any) => {this.dpts = res})
  }

  getDpts() {return this.dpts }
  getMembers() {return this.http.get('http://localhost/escuelaDB/getMembers.php') }

    
}
