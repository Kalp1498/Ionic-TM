import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase.module';
import { ProvidersModule } from './providers.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule,
    ProvidersModule
  ]
})
export class CoreModule { }
