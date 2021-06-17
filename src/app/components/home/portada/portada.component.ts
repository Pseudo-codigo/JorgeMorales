import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Empieza() {
    window.open("https://r2b1mpr0739.typeform.com/to/YV4o6wm3", '_blank');
  }

  Featured(){
    window.open("https://www.jeanpierreespinal.com/", '_blank');
  }

}
