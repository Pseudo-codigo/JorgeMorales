import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerComponent } from './layout/container/container.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ScrollService } from './services/scroll/scroll.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RecientesComponent } from './components/home/recientes/recientes.component';
import { PortadaComponent } from './components/home/portada/portada.component';
import { AcercaComponent } from './components/home/acerca/acerca.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    RecientesComponent,
    PortadaComponent,
    AcercaComponent,
    ContactoComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
