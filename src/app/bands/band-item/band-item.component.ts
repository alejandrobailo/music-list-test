import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-band-item',
	templateUrl: './band-item.component.html',
	styleUrls: [ './band-item.component.scss' ]
})
export class BandItemComponent implements OnInit {
	@Input() band;

	constructor() {}

	ngOnInit() {}
}
