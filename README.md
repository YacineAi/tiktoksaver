# TikTok Saver

TikTok Videos & Music info & Link Scraper

## Install

#### npm

```bash
npm i tiktoksaver
```

## Usage

<<<<<<< HEAD
#### JavaScript
=======
#### javascript
>>>>>>> 0ac8bfb45ede0ba23cdabc466464af0533efd8f8

```javascript
const tiktok = require('tiktoksaver')

/*
<<<<<<< HEAD
https://vm.tiktok.com/XXXXXX/ || https://www.tiktok.com/@XXXX/video/XXXXXX/
=======

https://vm.tiktok.com/XXXXXX/ || https://www.tiktok.com/@XXXX/video/XXXXXX/

>>>>>>> 0ac8bfb45ede0ba23cdabc466464af0533efd8f8
*/

tiktok.tsv('https://vm.tiktok.com/ZMLmjUAQk/?k=1')
     .then(result => {
          console.log(result) 
          // Should Return Author Name, Cover Pic, Description, Video with Watermark, Video with NO Watermark, Audio (MP3 Link)
     })
     .catch(e => console.log(e))
<<<<<<< HEAD
```
=======
```
>>>>>>> 0ac8bfb45ede0ba23cdabc466464af0533efd8f8
