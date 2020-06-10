import { Injectable } from '@angular/core';

import { Band } from '../models/band.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BandService {
	private bands: Band[];
	bandSelected = new Subject<Band>();

	constructor() {
		this.bands = [
			{
				name: 'The Rolling Stones',
				img: 'https://i.pinimg.com/originals/45/ea/80/45ea80a44cc809ab0984650699088294.png',
				description:
					"The Rolling Stones are an English rock band formed in London in 1962. The first stable line-up consisted of bandleader Brian Jones (guitar, harmonica, keyboards), Mick Jagger (lead vocals, harmonica), Keith Richards (guitar, vocals), Bill Wyman (bass guitar), Charlie Watts (drums), and Ian Stewart (piano). Stewart was removed from the official line-up in 1963 but continued to work with the band as a contracted musician until his death in 1985. The band's primary songwriters, Jagger–Richards, assumed leadership after Andrew Loog Oldham became the group's manager. Jones left the band less than a month before his death in 1969, having already been replaced by Mick Taylor. Taylor left in 1974 and was replaced in 1975 by Ronnie Wood who has since remained. Since Wyman's departure in 1993, Darryl Jones has served as touring bassist. The Stones have not had an official keyboardist since 1963, but have employed several musicians in that role, including Jack Nitzsche (1965–1971), Nicky Hopkins (1967–1982), Billy Preston (1971–1981), Ian McLagan (1978–1981), and Chuck Leavell (1982–present).",
				song: 'https://www.youtube.com/embed/nrIPxlFzDi0'
			},
			{
				name: 'Led Zeppelin',
				img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Led_Zeppelin_logo.svg',
				description:
					'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music.',
				song: 'https://www.youtube.com/embed/xbhCPt6PZIU'
			}
		];
	}

	getBands() {
		return this.bands.slice();
	}

	getBand(bandName: string) {
		return this.bands.filter((item) => item['name'].toLowerCase().includes(bandName.toLowerCase()));
	}

	getDetail(band: Band) {
		this.bandSelected.next(band);
	}
}
