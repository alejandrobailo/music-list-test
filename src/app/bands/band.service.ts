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

	constructor() {
		this.bands = bandsData;
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

	deleteBand(band) {
		this.bands = this.bands.filter((item) => item !== band);
		this.bandsObs.next(this.bands);
	}
}
