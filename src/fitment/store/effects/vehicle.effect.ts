import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

import { map, switchMap, catchError } from "rxjs/operators";

import * as vehicleActions from "../actions/vehicle.actions";
import { LoadYearsSuccess, LoadYearsFail } from "../actions/vehicle.action";
import { VehiclesService } from "../../../app/services/vehicles.service";

@Injectable()
export class VehicleEffect {
  constructor(
    private _vehiclesService: VehiclesService,
    private _actions: Actions
  ) {}

  @Effect()
  getYears = this._actions.pipe(
    ofType(vehicleActions.LoadYears),
    switchMap(action => {
      return this._vehiclesService.pipe(
        map((response: any) => new LoadYearsSuccess({ years: response.year })),
        catchError(error => of(new LoadYearsFail(error)))
      );
    })
  );
}
