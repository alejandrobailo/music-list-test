import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Band } from '../models/band.model';
import bands from '../data/bands.data';

@Injectable({
	providedIn: 'root'
})
export class BandService {
	bands: Band[];
	bandSelected = new Subject<Band>();

	constructor() {
		this.bands = bands;
	}

	getBands() {
		return this.bands.slice();
	}

	filterBands(bandName: string) {
		return this.bands.filter((item) => item['name'].toLowerCase().includes(bandName.toLowerCase()));
	}

	getDetail(band: Band) {
		this.bandSelected.next(band);
	}
}
