import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CreationComponent} from "./creation/creation.component";
import {NgIf} from "@angular/common";
import {Dialog, DialogModule} from "@angular/cdk/dialog";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GlobalPositionStrategy} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CreationComponent,
    NgIf,
    DialogModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';
  showComponent: boolean = true;
  constructor(private dialog: Dialog) {
  }

  openModal() {
    let ref = this.dialog.open(CreationComponent,
      {
        hasBackdrop: true,
        backdropClass: 'overlay-backdrop',
        panelClass: 'overlay-panel',
        positionStrategy: new GlobalPositionStrategy().centerVertically().centerHorizontally()
      });
    let instance = ref.componentInstance;
    instance!.modalView = true
  }
}
