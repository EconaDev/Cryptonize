import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import { AppSettings } from './appsettings';
@Injectable()
export class AppSettingsService {
  getSettings(): Observable<AppSettings> {
     const settings = new AppSettings();
     return of<AppSettings>(settings);
  }
}
