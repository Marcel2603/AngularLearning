import {bootstrapApplication, BrowserModule, provideProtractorTestingSupport} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from "@angular/router";
import {routeConfig} from "./routes";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";


bootstrapApplication(AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule),
      importProvidersFrom(BrowserAnimationsModule),
      provideAnimations(),
      importProvidersFrom(HttpClientModule),
      provideRouter(routeConfig,
        withPreloading(PreloadAllModules)
      ),
    ]
  }
).catch(err => console.error(err));
