import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Band } from '../models/band.model';
import bandsData from '../data/bands.data';

@Injectable({
	providedIn: 'root'
})
export class BandService {
	bands: Band[];
	bandsObs = new Subject<Band[]>();
	bandSelected = new Subject<Band>();
	headerObs = new Subject<boolean>();
	isFormObs = new Subject<boolean>();

	constructor(private router: Router) {
		this.bands = bandsData;
		this.headerObs.next(true);
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

		if (!this.bands['0']) {
			this.router.navigate([ '/new' ]);
			this.headerObs.next(false);
		} else {
			this.bandSelected.next(this.bands[0]);
		}
	}

	createBand(values: Band) {
		let embedUrl = values['song'].replace('watch?v=', 'embed/');
		values['song'] = embedUrl;
		this.bands.unshift(values);

		this.bandsObs.next(this.bands);
		this.headerObs.next(true);
		this.isFormObs.next(false);
	}
}
