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
	}

	onSubmit() {
		this.bandService.createBand(this.form.value);
		this.router.navigate([ '../' ]);
	}
}
