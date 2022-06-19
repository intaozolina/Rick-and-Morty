import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchParams} from "../../../models/character.model";

@Component({
  selector: 'app-characters-form',
  templateUrl: './characters-form.component.html',
  styleUrls: ['./characters-form.component.scss']
})
export class CharactersFormComponent implements OnInit {

  @Output()
  searchCharacterEvent = new EventEmitter<SearchParams>();

  charactersSearchForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.charactersSearchForm = this.fb.group({
      searchName:'',
      searchGender:'',
    })
  }

  searchCharacter(): void {
    this.searchCharacterEvent.emit(this.charactersSearchForm.value);
    this.charactersSearchForm.patchValue({
      searchName: '',
      searchGender: '',
    })
  }
}
