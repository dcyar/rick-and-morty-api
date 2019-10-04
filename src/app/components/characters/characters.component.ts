import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.styl']
})
export class CharactersComponent implements OnInit {
    characters: any[] = [];

    constructor() { }

    ngOnInit() {
        this.getCharacters();
    }

    async getCharacters() {
        const response = await fetch('https://rickandmortyapi.com/api/character/');

        const data = await response.json();

        this.characters = data.results;
    }

}
