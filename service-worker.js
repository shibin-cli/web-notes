/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efee13377abeea5893b4403c6375472f"
  },
  {
    "url": "analysis.html",
    "revision": "40369ccfec48f3d616f7b6404cc2b5c9"
  },
  {
    "url": "assets/css/0.styles.f3b0d8a4.css",
    "revision": "4a5c503427246337e5a41de7606e47f6"
  },
  {
    "url": "assets/img/example.c77cc8e2.png",
    "revision": "c77cc8e2654b3a61bf62d70055537497"
  },
  {
    "url": "assets/img/process.a55c776e.jpg",
    "revision": "a55c776ee5c585a35de55cfc4097da27"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.73fa03b1.js",
    "revision": "ed84aa199200257c1754a56d8c0032f7"
  },
  {
    "url": "assets/js/3.c760fc58.js",
    "revision": "c5cdf36000bb61c32ab0c0bc48573ac9"
  },
  {
    "url": "assets/js/4.b06963d8.js",
    "revision": "b56a376b1e4d3abf47b9e2a3d2e8025c"
  },
  {
    "url": "assets/js/5.f6a321fd.js",
    "revision": "109c94d5d33d8b386d9ac3f9fac0bdf5"
  },
  {
    "url": "assets/js/6.ab325388.js",
    "revision": "79968ef6c8cac76d410339cd28fb3147"
  },
  {
    "url": "assets/js/7.0deda649.js",
    "revision": "4e486fede60acd08d0bdbaa3778954fd"
  },
  {
    "url": "assets/js/8.09fd6c5a.js",
    "revision": "3ce280d0fb1233c9197a6187c5d788a5"
  },
  {
    "url": "assets/js/9.db3b6e99.js",
    "revision": "6735dc0aed6f0505cfa7de2122acc78a"
  },
  {
    "url": "assets/js/app.7aab198c.js",
    "revision": "ac570057c64e512fe9d4b65eddc2b31a"
  },
  {
    "url": "example.png",
    "revision": "c77cc8e2654b3a61bf62d70055537497"
  },
  {
    "url": "index.html",
    "revision": "d8b260e189894dfadd2d2b5ac2cd0e37"
  },
  {
    "url": "process.jpg",
    "revision": "a55c776ee5c585a35de55cfc4097da27"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
