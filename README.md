# cwb2mastodon

post weather forecast from www.cwb.gov.tw to mastodon instance

## Usage

Download

```
$ git clone git@github.com:poga/cwb2mastodon.git
$ npm i
```

Setup crontab like this:

```
0 9 * * * bash -c "cd ~/cwb2mastodon && HOST=https://g0v.social TOKEN=<YOUR_ACCESS_TOKEN> node index.js"
```

## License

MIT License
