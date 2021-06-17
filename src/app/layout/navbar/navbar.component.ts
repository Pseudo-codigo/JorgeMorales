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
    window.open("https://r2b1mpr0739.typeform.com/to/YV4o6wm3", '_blank');
  }

  ScrollToView() {
    this.Scroll.ScrollToView('#content');
  }

}
