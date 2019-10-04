import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styles: []
})
export class CharacterComponent implements OnInit {

    @Input() character: Character;

    constructor() { }

    ngOnInit() {
    }

}

interface Character {
    name: string;
    gender: string;
    species: string;
    image: string;
    status: string;
}
