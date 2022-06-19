import {Component, Input, OnInit} from '@angular/core';
import {CharactersResult} from "../../../models/character.model";

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {

@Input()
character: CharactersResult | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
