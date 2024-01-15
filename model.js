import puppeteer from 'puppeteer';
import { log } from './log.js';

const MY_ANIME_LIST_STATUS = {
  'Watching': 1,
  'On Hold': 3,
  'Dropped': 4,
  'Plan to Watch': 6,
};

const CHAPTER_DURATION = 20;

const scrapeSeries = async (accountURL, status) => { 
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process', '--no-zygote'],
    headless: true,
    executablePath: process.env.NODE_ENV === 'production' ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1080, height: 1024});
  await page.goto(`${accountURL}?status=${MY_ANIME_LIST_STATUS[status]}}`);

  const series = await page.$$eval('tr.list-table-data', (series) => series.map((serie) => {
      // get title
      const td_title = serie.querySelector('td.title a');
      const title = td_title?.textContent;

      const td_chapters = serie.querySelector('div[class^="progress"]');
      const last_chapter = Number(td_chapters?.children[0].textContent?.split(' ')[0]);
      const total_chapters = Number(td_chapters?.children[1].textContent);
      return {
        title,
        last_chapter,
        total_chapters
      }
    })
  );

  const seriesWithKnownChapters = series.filter((serie) => serie.total_chapters);
  const seriesWithUnknownChapters = series.filter((serie) => !serie.total_chapters);
  
  await browser.close();

  return {
    seriesWithKnownChapters,
    seriesWithUnknownChapters
  }
}

export const getSeries = async (accountURL) => {
  log(`Getting series for ${accountURL}`);

  log(`Getting with status Watching`);
  const watching = await getSeriesFor(accountURL, 'Watching');
  log(`Watching series scraped\n`)

  log(`Getting with status On Hold`)
  const onHold = await getSeriesFor(accountURL, 'On Hold');
  log(`On Hold series scraped\n`)

  // log(`Getting with status Dropped`)
  // const dropped = await getSeriesFor(accountURL, 'Dropped');
  // log(`Dropped series scraped\n`)

  log(`Getting with status Plan to Watch`)
  const planToWatch = await getSeriesFor(accountURL, 'Plan to Watch');
  log(`Plan to Watch series scraped`)

  console.log("\n\n");
  log('series scraping finished')

  return {
    "Watching": watching,
    "On Hold": onHold,
    // "Dropped": dropped,
    "Plan to Watch": planToWatch
  }

}

const getSeriesFor = async (accountURL, status) => {
  let {seriesWithKnownChapters, seriesWithUnknownChapters} = await scrapeSeries(accountURL, status);
  seriesWithKnownChapters = seriesWithKnownChapters.map((serie) => ({
    ...serie,
    missing_chapters: serie.total_chapters - (serie.last_chapter || 0),
  }))
  const missingMinutes = seriesWithKnownChapters.reduce((acc, serie) =>  acc + serie.missing_chapters * CHAPTER_DURATION, 0);
  const missingHours = missingMinutes / 60;

  return {
    seriesWithKnownChapters,
    seriesWithUnknownChapters,
    missingMinutes: parseFloat(missingMinutes.toPrecision(3)),
    missingHours: parseFloat(missingHours.toPrecision(3))
  }
}