import cheerio from 'cheerio';
import {toStr} from '/lib/enonic/util';

const $ = cheerio.load('<h2 class="title">Hello world</h2>');
$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

log.info(toStr({
	html: $.html()
}));
