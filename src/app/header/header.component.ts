import { Component, OnInit } from '@angular/core';

import { BandService } from '../bands/band.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	isForm: boolean;
	isHeader: boolean;

	constructor(private bandService: BandService) {
		this.isHeader = true;
		this.bandService.isFormObs.subscribe((data) => (this.isForm = data));
	}

	ngOnInit() {
		setTimeout(() => {
			this.bandService.isFormObs.subscribe((data) => (this.isForm = data));
			this.bandService.headerObs.subscribe((data) => (this.isHeader = data));
		}, 1);
	}

	handleBands(band) {
		this.bandService.filterBands(band.target.value);
	}
}
