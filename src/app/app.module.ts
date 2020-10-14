import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BusDetailsComponent } from './components/bus-details/bus-details.component';
import { BusOrganisationsComponent } from './components/bus-organisations/bus-organisations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMapPipe } from './pipes/status-map.pipe';
import { NotesComponent } from './components/notes/notes.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    BusDetailsComponent,
    BusOrganisationsComponent,
    StatusMapPipe,
    NotesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
