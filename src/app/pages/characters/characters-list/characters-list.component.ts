import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {CharactersResult, SearchParams} from "../../../models/character.model";
import {CharactersService} from "../../../services/characters.service";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  @Input()
  characters: CharactersResult[] | undefined;

  loading$: Observable<boolean> | undefined;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loading$ = this.charactersService.getLoadingState()
  }


}
