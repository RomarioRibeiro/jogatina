import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

@NgModule({

  exports: [

    InputTextModule,
    SidebarModule,
    ButtonModule


  ]





})
export class PrimengModule{ }
