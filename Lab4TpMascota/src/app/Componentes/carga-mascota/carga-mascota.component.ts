import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Mascota } from '../../Entidades/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  Nombre: string;
  Foto: string;
  Tipo: string;
  
  @Output() Out_Mascota = new EventEmitter<any>();

  constructor() {
    this.Nombre = "";
    this.Foto = "";
    this.Tipo = "";
   }

  ngOnInit(): void {
  }

  public AddPet() {
    console.log(this.Nombre);
    this.Out_Mascota.emit(new Mascota(this.Nombre, this.Foto, this.Tipo));
  }


}
