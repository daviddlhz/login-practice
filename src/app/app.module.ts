import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { routes } from "./app.routing";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}