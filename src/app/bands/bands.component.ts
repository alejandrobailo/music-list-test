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

	constructor(private bandService: BandService) {
		this.bands = this.bandService.getBands();
	}

	ngOnInit() {}
}
