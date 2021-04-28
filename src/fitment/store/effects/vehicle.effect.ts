import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { VehiclesService } from "../../../app/services/vehicles.service";

import * as vehicleAction from "../actions";

import { LoadYears, LoadYearsFail, LoadYearsSuccess } from "../actions";

@Injectable()
export class VehicleEffect {
  constructor(
    private _vehiclesService: VehiclesService,
    private _actions: Actions
  ) {}

  @Effect()
  getYears = this._actions.pipe(
    mergeMap(action => {
      return this._vehiclesService.getYears().pipe(
        map((response: any) => new LoadYearsSuccess({ years: response.year })),
        catchError(error => of(new LoadYearsFail(error)))
      );
    })
  );
}
