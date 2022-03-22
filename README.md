# TikTok Saver

TikTok Videos & Music info & Link Scraper

## Install

#### npm

```bash
npm i tiktoksaver
```

## Usage

#### JavaScript

```javascript
const tiktok = require('tiktoksaver')

/*
https://vm.tiktok.com/XXXXXX/ || https://www.tiktok.com/@XXXX/video/XXXXXX/
*/

tiktok.tsv('https://vm.tiktok.com/ZMLmjUAQk/?k=1')
     .then(result => {
          console.log(result) 
          // Should Return Author Name, Cover Pic, Description, Video with Watermark, Video with NO Watermark, Audio (MP3 Link)
     })
     .catch(e => console.log(e))
```