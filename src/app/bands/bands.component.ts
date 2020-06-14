import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

	constructor(private bandService: BandService, private router: Router, private title: Title, private meta: Meta) {
		this.bands = this.bandService.getBands();
	}

	ngOnInit() {
		if (!this.bands[0]) {
			this.router.navigate([ '/new' ]);
		}

		this.title.setTitle('Favourite Bands App');
		this.meta.addTag({ property: 'og:title', content: 'Favourite Bands App' }, true);
	}
}
