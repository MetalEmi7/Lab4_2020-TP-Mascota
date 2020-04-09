import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Mascota } from '../../Entidades/mascota';
import { stringify } from 'querystring';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  Nombre: string = "";
  Foto: string = "";
  Tipo: string = "";
  
  @Output() Out_Mascota = new EventEmitter<any>();

  constructor() { this.ClearInputs();  }
  ngOnInit(): void { }

  public AddPet() {
    if (this.Nombre != "" || this.Foto != "") {
      this.Out_Mascota.emit(new Mascota(this.Nombre, this.Foto, this.Tipo));
      this.ClearInputs();   
    }
    else    
      alert("No se han completado todos los datos");  
  }

  public ClearInputs() {
    this.Nombre = "";
    this.Foto = "";
    this.Tipo = "Felino";
  }
}
