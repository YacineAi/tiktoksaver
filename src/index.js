const fetch = require('node-fetch');
const request = require('request-promise');

/* --------------- CORE --------------- */


function tsv(url) {
  if (url.startsWith("https://vm.tiktok.com/")) {
    return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response)
    .then(data => { // data.url
        var remv = data.url.split('?')[0]
        const uid = remv.split('/')[3]
        const vid = remv.split('/')[5]
        fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${vid}`)
            .then(response => response.json())
            .then(data => {
              var reqOptions = {
                method: 'GET',
                uri: `https://www.tiktok.com/node/share/video/${uid}/${vid}/`,
                qs: {},
                headers: {
                  'user-agent': 'okhttp'
                },
                json: true
              };
              request(reqOptions)
                .then(function(parsedBody) {
                  const result = {
                    author: data.aweme_detail.author.nickname,
                    cover: parsedBody.itemInfo.itemStruct.video.cover,
                    description: data.aweme_detail.desc,
                    videowm: parsedBody.itemInfo.itemStruct.video.downloadAddr,
                    videonm: data.aweme_detail.video.play_addr.url_list[0],
                    audio: parsedBody.itemInfo.itemStruct.music.playUrl
                  }
                  resolve(result);
                })
                .catch(function(err) {
                  console.log("request failed : "+err);
                });
            })
          .catch(e => {
            reject({ status: false, message: 'error fetch data', e: e.message })
        });
    });
  })
  } else if (url.startsWith("https://www.tiktok.com/")) {
    return new Promise((resolve, reject) => {
      var remv = url.split('?')[0]
        // const uid = remv.split('/')[3]
        const vid = remv.split('/')[5]
        fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${vid}`)
            .then(response => response.json())
            .then(data => {
              const result = {
                author: data.aweme_detail.author.nickname,
                cover: data.aweme_detail.video.origin_cover.url_list[0],
                description: data.aweme_detail.desc,
                videowm: data.aweme_detail.video.download_addr.url_list[0],
                videonm: data.aweme_detail.video.play_addr.url_list[0],
                audio: data.aweme_detail.music.play_url.url_list[0]
              }
              resolve(result);
            })
          .catch(e => {
            reject({ status: false, message: 'error fetch data', e: e.message })
        });
    })
  }
        }
module.exports.tsv = tsv