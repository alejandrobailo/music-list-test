import { Component, OnInit } from '@angular/core';
import { BandService } from './band.service';
import { Band } from '../models/band.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bands',
	templateUrl: './bands.component.html',
	styleUrls: [ './bands.component.scss' ]
})
export class BandsComponent implements OnInit {
	bands: Band[];

	constructor(private bandService: BandService, private router: Router) {
		this.bands = this.bandService.getBands();
	}

	ngOnInit() {
		if (!this.bands[0]) {
			this.router.navigate([ '/new' ]);
		}
	}
}
