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
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSduA_2gZebzhedR6dkX62yeCAOU40A15FZFDXB5uh2Yc271lQ/viewform", '_blank');
  }

  Featured(){
    window.open("https://www.jeanpierreespinal.com/", '_blank');
  }

}
