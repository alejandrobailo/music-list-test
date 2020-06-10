import { Component, OnInit } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from 'src/app/models/band.model';

@Component({
	selector: 'app-bands-list',
	templateUrl: './bands-list.component.html',
	styleUrls: [ './bands-list.component.scss' ]
})
export class BandsListComponent implements OnInit {
	bands: Band[];

	constructor(private bandService: BandService) {
		this.bands = this.bandService.getBands();
	}

	ngOnInit() {}

	handleBand(band) {
		this.bandService.getDetail(band);
	}

	handleBands(band) {
		this.bands = this.bandService.getBand(band.target.value);
		console.log(this.bands);
	}
}
