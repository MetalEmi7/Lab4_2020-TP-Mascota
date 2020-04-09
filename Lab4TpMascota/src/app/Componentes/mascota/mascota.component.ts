import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../Entidades/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  @Input() Mascota: Mascota;

  constructor() { }

  ngOnInit(): void {
  }
}
