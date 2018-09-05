import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { AenigmaLocalStorageProvider, Aenigma, AenigmaStorageService } from 'aenigma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private _electronService: ElectronService) {}

}
