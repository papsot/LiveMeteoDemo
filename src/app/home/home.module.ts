import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// ========= components ===========
import { TemperatureComponent } from '../components/temperature/temperature.component';
import { WindInfoComponent } from '../components/wind-info/wind-info.component';
import { RainfallComponent } from '../components/rainfall/rainfall.component';
import { SolarIrradianceComponent } from '../components/solar-irradiance/solar-irradiance.component';
// =================================

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoModalPage } from '../modals/info-modal/info-modal.page';
import { InfoModalPageModule } from '../modals/info-modal/info-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    InfoModalPage,
    TemperatureComponent,
    WindInfoComponent,
    RainfallComponent,
    SolarIrradianceComponent
  ],
  entryComponents: [InfoModalPage]
})
export class HomePageModule {}
