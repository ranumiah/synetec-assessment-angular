import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";
import { Observable } from "rxjs/Observable";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    showCities: boolean;
    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {
        this.getCities();
    }

    private getCities() {
        this._citiesService.getListOfCities().subscribe((cities) => {
            this.cities = cities;
            this.showCities = this.cities != null;
        });
    }
}