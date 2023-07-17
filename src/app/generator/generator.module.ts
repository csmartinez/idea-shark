import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneratorComponent } from './generator.component';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [GeneratorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GeneratorComponent,
      }
    ])
  ]
})
export class GeneratorModule { }
