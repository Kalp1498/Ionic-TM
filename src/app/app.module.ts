import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoInternetPage } from './pages/no-internet/no-internet.page';
import { RateUsHerePage } from './pages/rate-us-here/rate-us-here.page';

@NgModule({
  declarations: [
    AppComponent,
    NoInternetPage,
    RateUsHerePage
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
