import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss']
})
export class RecientesComponent implements OnInit {


  projects = [
    { name: "antimateria", link: "https://www.antimaterias.com" },
    { name: "toxicos", link: "https://www.instagram.com/toxicosapparel" },
    { name: "cesar", link: "https://cesarmorales.co" },
    { name: "venysirve", link: "https://www.facebook.com/venysirve" },
    { name: "fultonandroark", link: "https://fultonandroark.com" },
    { name: "retrospect", link: "https://www.behance.net/gallery/102339235/RETROSPECT" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(link: string) {
    window.open(link, '_blank');
  }

}
