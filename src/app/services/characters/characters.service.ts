import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CharactersService {

    apiUrl = `https://rickandmortyapi.com/api/character/`;

    // tslint:disable-next-line: variable-name
    constructor(private _http: HttpClient) {
    }

    getCharacters() {
        return this._http.get(this.apiUrl);
    }
}
