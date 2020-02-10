import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    showCities: boolean;
    constructor() {
        this.cities = new Array<ICity>();
    }

    ngOnInit(): void {
        this.showCities = this.cities.length != 0;
    }
}