import { Component, OnInit } from '@angular/core';
import {LocationResult, SearchLocation} from 'src/app/models/location.model';
import {LocationsService} from "../../services/locations.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: LocationResult[] | undefined;
  locationsSubscription: Subscription | undefined;
  page: number = 1;
  searchLocation: SearchLocation = {
    searchName: '',
    searchDimension: '',
  }

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
      this.locationsSubscription = this.locationService.getLocations(this.searchLocation.searchName, this.searchLocation.searchDimension, this.page).subscribe((locations)=> {
        this.locations = locations
      })
    }

    searchLocations(searchLocation: SearchLocation): void {
      this.searchLocation = {searchName: searchLocation.searchName, searchDimension: searchLocation.searchDimension}
      this.locationsSubscription = this.locationService.getLocations(this.searchLocation.searchName, this.searchLocation.searchDimension, this.page).subscribe((locations)=> {
        this.locations = locations
      })
    }
  loadMore(): void {
    this.page = this.page+1;
    this.locationsSubscription = this.locationService.getLocations(this.searchLocation.searchName, this.searchLocation.searchDimension, this.page).subscribe((locations) => {
      if(this.locations)
      this.locations = this.locations.concat(locations);
    })
  }

  ngOnDestroy(): void {
    if(this.locationsSubscription)
    this.locationsSubscription.unsubscribe();
  }
}

