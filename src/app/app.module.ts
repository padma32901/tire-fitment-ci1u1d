import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { VehicleEffect } from "../fitment/store/effects";
import { VehiclesService } from "./services/vehicles.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FitmentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([VehicleEffect])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [VehiclesService]
})
export class AppModule {}
