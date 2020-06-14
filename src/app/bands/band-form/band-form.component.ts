import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BandService } from '../band.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-band-form',
	templateUrl: './band-form.component.html',
	styleUrls: [ './band-form.component.scss' ]
})
export class BandFormComponent implements OnInit {
	form: FormGroup;

	constructor(private bandService: BandService, private router: Router) {
		this.form = new FormGroup({
			name: new FormControl('', [ Validators.required, Validators.maxLength(25) ]),
			img: new FormControl('', [
				Validators.pattern(
					/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
				),
				Validators.required
			]),
			song: new FormControl('', [
				Validators.pattern(
					/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
				),
				Validators.required
			]),
			description: new FormControl('', [ Validators.required, Validators.minLength(25) ])
		});
	}

	ngOnInit() {
		this.bandService.isForm = true;
	}

	onSubmit() {
		this.bandService.createBand(this.form.value);
		this.router.navigate([ '../' ]);
	}
}
