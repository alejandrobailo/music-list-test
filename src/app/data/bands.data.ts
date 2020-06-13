import { Band } from '../models/band.model';

let bandsData: Band[] = [
	{
		name: 'The Rolling Stones',
		img: 'https://i.pinimg.com/originals/45/ea/80/45ea80a44cc809ab0984650699088294.png',
		description:
			"The Rolling Stones are an English rock band formed in London in 1962. The first stable line-up consisted of bandleader Brian Jones (guitar, harmonica, keyboards), Mick Jagger (lead vocals, harmonica), Keith Richards (guitar, vocals), Bill Wyman (bass guitar), Charlie Watts (drums), and Ian Stewart (piano). Stewart was removed from the official line-up in 1963 but continued to work with the band as a contracted musician until his death in 1985. The band's primary songwriters, Jagger–Richards, assumed leadership after Andrew Loog Oldham became the group's manager. Jones left the band less than a month before his death in 1969, having already been replaced by Mick Taylor. Taylor left in 1974 and was replaced in 1975 by Ronnie Wood who has since remained. Since Wyman's departure in 1993, Darryl Jones has served as touring bassist. The Stones have not had an official keyboardist since 1963, but have employed several musicians in that role, including Jack Nitzsche (1965–1971), Nicky Hopkins (1967–1982), Billy Preston (1971–1981), Ian McLagan (1978–1981), and Chuck Leavell (1982–present).",
		song: 'https://www.youtube.com/embed/nrIPxlFzDi0'
	}
	// {
	// 	name: 'Led Zeppelin',
	// 	img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Led_Zeppelin_logo.svg',
	// 	description:
	// 		'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music.',
	// 	song: 'https://www.youtube.com/embed/xbhCPt6PZIU'
	// },
	// {
	// 	name: 'Queen',
	// 	img: 'https://1000marcas.net/wp-content/uploads/2020/03/Queen-logo.png',
	// 	description:
	// 		'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.',
	// 	song: 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
	// },
	// {
	// 	name: 'Pink Floid',
	// 	img:
	// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pink_Floyd_logo.svg/1200px-Pink_Floyd_logo.svg.png',
	// 	description:
	// 		'Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic rock group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. They are one of the most commercially successful and influential bands in popular music history.',
	// 	song: 'https://www.youtube.com/embed/YR5ApYxkU-U'
	// },
	// {
	// 	name: 'Deep Purple',
	// 	img: 'https://i.pinimg.com/originals/fc/8d/67/fc8d674de4e407ffc52b80589acabca7.png',
	// 	description: `Deep Purple are an English rock band formed in Hertford, Hertfordshire in 1968.The band is considered to be among the pioneers of heavy metal and modern hard rock,although their musical approach changed over the years. Originally formed as a psychedelic rock and progressive rock band, they shifted to a heavier sound with their 1970 album Deep Purple in Rock.Deep Purple, together with Led Zeppelin and Black Sabbath, have been referred to as the "unholy trinity of British hard rock and heavy metal in the early to mid-seventies".They were listed in the 1975 Guinness Book of World Records as "the globe's loudest band" for a 1972 concert at London's Rainbow Theatre and have sold over 100 million copies of their albums worldwide.`,
	// 	song: 'https://www.youtube.com/embed/gZ_kez7WVUU'
	// },
	// {
	// 	name: 'AC/DC',
	// 	img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Logo_ACDC.svg/640px-Logo_ACDC.svg.png',
	// 	description: `AC/DC (stylized as ACϟDC) are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.Although their music has been variously described as hard rock, blues rock, and heavy metal,the band themselves call it simply "rock and roll"`,
	// 	song: 'https://www.youtube.com/embed/pAgnJDJN4VA'
	// },
	// {
	// 	name: 'Ramones',
	// 	img: 'https://seeklogo.com/images/R/ramones-logo-3CFFC16009-seeklogo.com.png',
	// 	description: `The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens in 1974. They are often cited as the first true punk rock group. Despite achieving only limited commercial success initially, the band was highly influential in the United States, South America, and the United Kingdom.`,
	// 	song: 'https://www.youtube.com/embed/OfIfzVf8t6E'
	// },
	// {
	// 	name: 'Kiss',
	// 	img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/KISS_logo.svg/1200px-KISS_logo.svg.png',
	// 	description: `A kiss is the touch or pressing of one's lips against another person or an object. Cultural connotations of kissing vary widely. Depending on the culture and context, a kiss can express sentiments of love, passion, romance, sexual attraction, sexual activity, sexual arousal, affection, respect, greeting, friendship, peace, and good luck, among many others. In some situations, a kiss is a ritual, formal or symbolic gesture indicating devotion, respect, or sacrament. The word came from Old English cyssan ("to kiss"), in turn from coss ("a kiss").`,
	// 	song: 'https://www.youtube.com/embed/EZjevnnkA20'
	// }
];

export default bandsData;
