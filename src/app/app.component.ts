import { Component } from '@angular/core';
import { CustomIconsService } from './services/custom-icons/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JorgeMorales';

  constructor(
    customIcons: CustomIconsService) {
    /**
             * ----------------------------------------------------------------------------------------------------
             * Custom Icons
             * ----------------------------------------------------------------------------------------------------
             */
    customIcons.setCustomIcons();
  }
}
