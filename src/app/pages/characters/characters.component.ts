import { Component } from '@angular/core';
import { CharactersResult } from "../../models/character.model";
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


  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

      this.charactersSubscription = this.charactersService.getCharacters(this.page).subscribe((characters) => {
        this.characters = characters;
      })
  }

  onScroll(): void {
    this.page = this.page+1;
    this.charactersSubscription = this.charactersService.getCharacters(this.page).subscribe((characters) => {
      this.characters = this.characters?.concat(characters);
    })
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }
}
