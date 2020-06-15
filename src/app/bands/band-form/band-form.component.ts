import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BandService } from '../band.service';

@Component({
	selector: 'app-band-form',
	templateUrl: './band-form.component.html',
	styleUrls: [ './band-form.component.scss' ]
})
export class BandFormComponent implements OnInit {
	form: FormGroup;

	constructor(private bandService: BandService, private router: Router, private title: Title, private meta: Meta) {
		this.form = new FormGroup({
			name: new FormControl('', [ Validators.required, Validators.maxLength(25) ]),
			img: new FormControl('', [
				Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|svg|gif))/),
				Validators.required
			]),
			song: new FormControl('', [
				Validators.pattern(
					/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
				),
				Validators.required
			]),
			description: new FormControl('', [ Validators.required, Validators.minLength(25) ])
		});
	}

	ngOnInit() {
		this.bandService.isFormObs.next(true);
		this.title.setTitle('Add a new band');
		this.meta.addTag({ property: 'og:title', content: 'Add a new band' }, true);
	}

	onSubmit() {
		this.bandService.createBand(this.form.value);
		this.router.navigate([ '../' ]);
	}
}
