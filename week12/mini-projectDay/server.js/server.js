// let Parser = require("rss-parser");
// let parser = new Parser();

// (async () => {
//   let feed = await parser.parseURL("your-rss-feed");
//   console.log(feed.title);

//   feed.items.forEach((item) => {
//     console.log(item.title + ":" + item.link);
//   });
// })();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// RSS Parser
const parser = new Parser();

// routes
app.get('/', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('index', { feed: feed });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving facts from the RSS feed');
  }
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search/title', async (req, res) => {
  try {
    const title = req.body.title;
    const feed = await parser.parseURL('https://thefactfile.org/feed/');

    const filteredItems = feed.items.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );

    res.render('search', { feed: { items: filteredItems } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error searching by title');
  }
});

app.post('/search/category', async (req, res) => {
  try {
    const category = req.body.category;
    const feed = await parser.parseURL('https://thefactfile.org/feed/');

    const filteredItems = feed.items.filter((item) =>
      item.categories.includes(category)
    );

    res.render('search', { feed: { items: filteredItems } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error searching by category');
  }
});

// starts server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});