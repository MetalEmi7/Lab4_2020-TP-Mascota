import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../Entidades/mascota';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {
  List_Mascota: Array<Mascota> = [];
  Mascota_ParaMostrar: Mascota;

  constructor() {
   }

  ngOnInit(): void {    
  }  

  public AddPet(Obj) {
    this.List_Mascota.push(Obj);
  }

  public ShowPet(Obj){
    console.log("ShowPet" + Obj);
    this.Mascota_ParaMostrar = Obj;
  }
}
