import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BandService } from '../band.service';
import { Band } from 'src/app/models/band.model';

@Component({
	selector: 'app-band-detail',
	templateUrl: './band-detail.component.html',
	styleUrls: [ './band-detail.component.scss' ]
})
export class BandDetailComponent implements OnInit {
	band: Band;
	isEmpty: boolean;
	safeSrc: SafeResourceUrl;

	constructor(private bandService: BandService, private sanitizer: DomSanitizer) {
		this.band = this.bandService.getBands()[0];
		if (this.band) {
			this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.band['song']);
		}
	}

	ngOnInit() {
		this.bandService.bandSelected.subscribe((data) => {
			this.band = data;
			this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.band['song']);
		});
	}

	handleRemove() {
		this.bandService.deleteBand(this.band);
	}
}
