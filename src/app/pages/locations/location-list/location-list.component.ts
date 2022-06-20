import { Component, Input, OnInit } from '@angular/core';
import { LocationResult } from 'src/app/models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input()
  locations: LocationResult[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
