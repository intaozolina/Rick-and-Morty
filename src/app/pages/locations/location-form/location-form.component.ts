import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchParams} from "../../../models/character.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchLocation} from "../../../models/location.model";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  @Output()
  searchLocationEvent = new EventEmitter<SearchLocation>();

  locationsSearchForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.locationsSearchForm = this.fb.group({
      searchName:'',
      searchDimension:'',
    })
  }

  searchLocations(): void {
    this.searchLocationEvent.emit(this.locationsSearchForm.value);
    this.locationsSearchForm.patchValue({
      searchName: '',
      searchDimension: '',
    })
  }

}
