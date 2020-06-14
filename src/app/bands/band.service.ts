import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Band } from '../models/band.model';
import bandsData from '../data/bands.data';

@Injectable({
	providedIn: 'root'
})
export class BandService {
	bands: Band[];
	bandsObs = new Subject<Band[]>();
	bandSelected = new Subject<Band>();
	isForm: boolean;

	constructor() {
		this.bands = bandsData;
		this.isForm = true;
	}

	getBands() {
		return this.bands.slice();
	}

	filterBands(bandName: string) {
		this.bandsObs.next(this.bands.filter((item) => item['name'].toLowerCase().includes(bandName.toLowerCase())));
	}

	getDetail(band: Band) {
		this.bandSelected.next(band);
	}

	deleteBand(band: Band) {
		this.bands = this.bands.filter((item) => item !== band);
		this.bandsObs.next(this.bands);
	}

	createBand(values: Band) {
		this.bands.unshift(values);
		console.log(this.bands);
		this.bandsObs.next(this.bands);
	}
	// SOLUCIONAR QUE AL BORRAR PUEDA VER LOS DETAILS DE LAS BANDAS
}
