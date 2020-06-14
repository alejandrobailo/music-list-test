import { Component, OnInit, Input } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from 'src/app/models/band.model';

@Component({
	selector: 'app-bands-list',
	templateUrl: './bands-list.component.html',
	styleUrls: [ './bands-list.component.scss' ]
})
export class BandsListComponent implements OnInit {
	@Input() bands: Band[];

	constructor(private bandService: BandService) {
		this.bands = this.bandService.getBands();
	}

	ngOnInit() {
		this.bandService.bandsObs.subscribe((data) => (this.bands = data));
		this.bandService.isForm = false;
	}

	handleBand(band) {
		this.bandService.getDetail(band);
	}
}
