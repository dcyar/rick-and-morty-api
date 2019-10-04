import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { Character } from 'src/app/models/character.model';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.styl']
})
export class CharactersComponent implements OnInit {
    characters: Character[];

    // tslint:disable-next-line: variable-name
    constructor(private _charactersService: CharactersService) { }

    ngOnInit() {
        return this._charactersService.getCharacters().subscribe(data => {
            // tslint:disable-next-line: no-string-literal
            this.characters = data['results'];
        });
    }
}
