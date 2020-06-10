import { Component, OnInit } from '@angular/core';
import { BandService } from './band.service';
import { Band } from '../models/band.model';

@Component({
	selector: 'app-bands',
	templateUrl: './bands.component.html',
	styleUrls: [ './bands.component.scss' ]
})
export class BandsComponent implements OnInit {
	bands: Band[];
	bandsFiltered: Band[];

	constructor(private bandService: BandService) {
		this.bands = bandService.getBands();
		this.bandsFiltered = this.bands;
	}

	ngOnInit() {}

	handleBands(band) {
		this.bandsFiltered = this.bandService.filterBands(band.target.value);
	}
}
