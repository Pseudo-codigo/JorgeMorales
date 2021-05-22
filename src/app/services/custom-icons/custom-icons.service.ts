import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CustomIconsService {

  path: String = "../../../assets/img/svg/";
  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer) { }

  setCustomIcons() {
    this.iconReg.addSvgIcon('logo', this.sanitize('SVGs-01.svg'))
      .addSvgIcon('logo', this.sanitize('SVGs-01.svg'))
      .addSvgIcon('one', this.sanitize('SVGs-02.svg'))
      .addSvgIcon('two', this.sanitize('SVGs-03.svg'))
      .addSvgIcon('three', this.sanitize('SVGs-04.svg'))
      .addSvgIcon('globe', this.sanitize('SVGs-05.svg'))
      .addSvgIcon('destacados', this.sanitize('SVGs-07.svg'))
      .addSvgIcon('recientes', this.sanitize('SVGs-17.svg'))
      .addSvgIcon('about', this.sanitize('SVGs-24.svg'))
      .addSvgIcon('awards', this.sanitize('SVGs-25.svg'))
      .addSvgIcon('green', this.sanitize('SVGs-26.svg'))
      .addSvgIcon('blue', this.sanitize('SVGs-27.svg'))
      .addSvgIcon('dribbble', this.sanitize('SVGs-28.svg'))
      .addSvgIcon('globePink', this.sanitize('SVGs-29.svg'))
      .addSvgIcon('behanced', this.sanitize('SVGs-30.svg'))
      .addSvgIcon('instagram', this.sanitize('SVGs-31.svg'))
      .addSvgIcon('whatsapp', this.sanitize('SVGs-32.svg'))
      .addSvgIcon('twitter', this.sanitize('SVGs-33.svg'))
      .addSvgIcon('logoPink', this.sanitize('SVGs-34.svg'))
      .addSvgIcon('arrow', this.sanitize('SVGs-35.svg'))
      .addSvgIcon('antimateria', this.sanitize('antimateria.svg'))
      .addSvgIcon('cesar', this.sanitize('cesar.svg'))
      .addSvgIcon('fultonandroark', this.sanitize('fultonandroark.svg'))
      .addSvgIcon('jeanpierre', this.sanitize('jeanpierre.svg'))
      .addSvgIcon('retrospect', this.sanitize('retrospect.svg'))
      .addSvgIcon('toxicos', this.sanitize('toxicos.svg'))
      .addSvgIcon('venysirve', this.sanitize('venysirve.svg'))
  }

  sanitize(iconPath: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.path + iconPath);
  }
}
