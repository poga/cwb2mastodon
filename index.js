var request = require('superagent')
var exec = require('child_process').exec

var weather = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Data/Forecast01.png'

var HOST = process.env.HOST
var TOKEN = process.env.TOKEN

exec(`curl ${weather} > t.png`, function (err) {
  if (err) throw err

  uploadMedia('t.png', function (err, mediaID) {
    if (err) throw err

    post(mediaID, function (err) {
      if (err) throw err
    })
  })
})

function uploadMedia (filename, cb) {
  request
    .post(`${HOST}/api/v1/media`)
    .query({ access_token: TOKEN })
    .type('form')
    .attach('file', filename)
    .end(function (err, res) {
      if (err) return cb(err)

      cb(null, res.body.id)
    })
}

function post (mediaID, cb) {
  request
    .post(`${HOST}/api/v1/statuses`)
    .query({ access_token: TOKEN })
    .type('form')
    .send({ status: '天氣預報', 'media_ids[]': mediaID })
    .end(cb)
}
