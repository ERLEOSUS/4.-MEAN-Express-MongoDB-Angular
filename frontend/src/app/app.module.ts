import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { GastoService } from './services/gasto.service';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
