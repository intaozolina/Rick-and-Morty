import { Component } from '@angular/core';
import { CharactersResult, SearchParams } from "../../models/character.model";
import { Subscription } from "rxjs";
import { CharactersService } from "../../services/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters: CharactersResult[] | undefined;
  charactersSubscription?: Subscription;
  page: number = 1;

  searchParams: SearchParams = {
    searchGender:'',
    searchName: '',
  };
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    if (this.searchParams) {
      this.charactersSubscription = this.charactersService.getCharacters(this.searchParams.searchName, this.searchParams.searchGender, this.page).subscribe((characters) => {
        this.characters = characters;
      })
    }
  }

  searchCharacter(searchParameters: SearchParams): void {
    this.searchParams = searchParameters;
    this.charactersSubscription = this.charactersService.getCharacters(this.searchParams.searchName, this.searchParams.searchGender, this.page).subscribe((characters) => {
      this.characters = characters;
    })
  }

  loadMore(): void {
    this.page = this.page+1;
    this.charactersSubscription = this.charactersService.getCharacters(this.searchParams.searchName, this.searchParams.searchGender, this.page).subscribe((characters) => {
      this.characters = this.characters?.concat(characters);
    })
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }
}
