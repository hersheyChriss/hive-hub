import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LunchComponent } from './lunch/lunch.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadersComponent } from './dashboard/leaders/leaders.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { LegendComponent } from './legend/legend.component';
import { LegendRobertComponent } from './legend-robert/legend-robert.component';


@NgModule({
  declarations: [
    AppComponent,
    LunchComponent,
    DashboardComponent,
    LeadersComponent,
    ActivitiesComponent,
    HelpPageComponent,
    LegendComponent,
    LegendRobertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
