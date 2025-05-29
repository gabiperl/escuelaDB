import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-add-dpt',
  imports: [FormsModule],
  templateUrl: './add-dpt.component.html',
  styles: ``
})
export class AddDPTComponent {

  constructor(private datos:DatosService) { }

  addDpt(newDpt:string, newDesc:string) {
    if (newDpt.trim() && newDesc.trim())
    { this.datos.addDpt(newDpt, newDesc).subscribe( (res:any) => {
      if (res.mensaje)
    });
      // Reset the input fields after adding
      newDpt = '';
      newDesc = '';
    }


  }

}
