import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() ToggleEvent = new EventEmitter();
  constructor(
    public Scroll: ScrollService
  ) { }

  ngOnInit(): void {
  }

  Toggle() {
    this.ToggleEvent.emit();
  }

  
  Empieza() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSduA_2gZebzhedR6dkX62yeCAOU40A15FZFDXB5uh2Yc271lQ/viewform", '_blank');
  }

  ScrollToView() {
    this.Scroll.ScrollToView('#content');
  }

}
