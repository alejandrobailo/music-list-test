import { Component, OnInit } from '@angular/core';
import { Band } from '../models/band.model';
import { BandService } from '../bands/band.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor(private bandService: BandService) {}

	ngOnInit() {}

	handleBands(band) {
		this.bandService.filterBands(band.target.value);
	}
}
