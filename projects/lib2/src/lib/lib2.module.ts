import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { Lib1Module } from 'projects/lib1/src/public-api';



@NgModule({
  declarations: [Lib2Component],
  imports: [
    Lib1Module
  ],
  exports: [Lib2Component]
})
export class Lib2Module { }
