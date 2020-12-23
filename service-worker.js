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
    "revision": "681bc5aeb995f223bb64a1fc35f656b7"
  },
  {
    "url": "analysis.html",
    "revision": "26ed82331f06126c54c5570953e619e3"
  },
  {
    "url": "assets/css/0.styles.f3b0d8a4.css",
    "revision": "4a5c503427246337e5a41de7606e47f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.7619bfd3.js",
    "revision": "d313eab44e6da16fa6083115807a11c1"
  },
  {
    "url": "assets/js/3.d9ef3586.js",
    "revision": "13d784faea3027a2b359c683d2351cd4"
  },
  {
    "url": "assets/js/4.7c7cbcb6.js",
    "revision": "9983aa869ae3c8ebbd54f2b693264565"
  },
  {
    "url": "assets/js/5.8cb0d25d.js",
    "revision": "54b4c2c9caf719819ab4c412b413f9b1"
  },
  {
    "url": "assets/js/6.2cb68e23.js",
    "revision": "6489af6d0d4a9bcf52c08d617fa84cfd"
  },
  {
    "url": "assets/js/7.17403e3c.js",
    "revision": "b4d15bfcc5ce586ef236c2d82e194e7d"
  },
  {
    "url": "assets/js/8.dd4735af.js",
    "revision": "a07b4aaad265e2acff604ba7e9431851"
  },
  {
    "url": "assets/js/9.4305148e.js",
    "revision": "4e50ecf31b5bbdd16fcf5455a980d4b5"
  },
  {
    "url": "assets/js/app.85586d3c.js",
    "revision": "3aa385ca3ee73a46f5c92d41019dacf1"
  },
  {
    "url": "index.html",
    "revision": "8614d09822117dde7388b58fccebc6b7"
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
