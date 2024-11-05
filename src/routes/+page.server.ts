import Parser from "rss-parser";

let ssr = true;

export async function load() {
  
  try {
    
    const parser = new Parser();
    const feed = await parser.parseURL('https://medium.com/feed/@itsfuad');

    return {
      feed: feed.items
    }
  } catch (_) {
    //console.log('running on client (page)');
    return {
      feed: []
    }
  }
}