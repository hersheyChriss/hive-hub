import { Component, OnInit } from '@angular/core';
import { LeadersComponent } from './leaders/leaders.component';
import { ActivitiesComponent } from './activities/activities.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
