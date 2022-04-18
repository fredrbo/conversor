import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { MultConverterComponent } from './mult-converter/mult-converter.component';

const routes: Routes = [
  {path: '', component: ConverterComponent},
  {path: 'converter', component: ConverterComponent},
  {path: 'converter-mult', component: MultConverterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
