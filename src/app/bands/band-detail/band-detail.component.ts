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
		this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.band['song']);
		this.isEmpty = false;
	}

	ngOnInit() {
		this.bandService.bandSelected.subscribe((data) => {
			this.band = data;
			this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.band['song']);
		});
	}

	handleRemove() {
		if (this.bandService.getBands()[0]) {
			this.bandService.deleteBand(this.band);
			this.isEmpty = true;
		} else {
			this.bandService.deleteBand(this.band);
		}
	}
}
