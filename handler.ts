import * as parser from "rss-parser";
import * as cheerio from "cheerio";

/**
 * Serverless Function to Parse RSS Feed and provide article images
 *
 * I have intentionally ignored media:content in feed item, because it the task you asked to parse the actual article
 *
 * @param event
 * @param context
 * @param callback
 */
export function getImages(event, context, callback) {
  parser.parseURL('http://www.ladbible.com/news.rss', (err, parsed) => {
    let entries = [];
    parsed.feed.entries.forEach(function(entry) {
      let $ = cheerio.load(entry['content:encoded']);
      let images = [];
      $("img").each((index, item) => {
        images.push($(item).attr('src'));
      });
      entries.push({
        'url': entry.guid,
        'title': entry.title,
        'images': images
      });
    });
    callback(null, entries);
  });
}