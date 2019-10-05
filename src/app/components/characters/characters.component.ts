import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.styl']
})
export class CharactersComponent implements OnInit {
    characters: any[] = [];

    // tslint:disable-next-line: variable-name
    constructor(private _charactersService: CharactersService) {
        this._charactersService.getCharacters().subscribe((data: any) => {
            this.characters = data.results;
        });
    }

    ngOnInit() {
    }
}
