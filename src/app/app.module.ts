import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BusDetailsComponent } from './components/bus-details/bus-details.component';
import { BusOrganisationsComponent } from './components/bus-organisations/bus-organisations.component';
import { PartialBoldPipe } from './pipes/partial-bold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BusDetailsComponent,
    BusOrganisationsComponent,
    PartialBoldPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
