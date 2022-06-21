'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "af69824bea9782fa753ef5d01876ae81",
"assets/assets/1.jpeg": "b7c2f1c0889652a666402f0222ae38bc",
"assets/assets/10.jpeg": "c360f2b0de6b0c291164d67d7f21f95d",
"assets/assets/11.jpeg": "568e85208d7393f8011a318cc61831aa",
"assets/assets/1_book.png": "5f2817a8b5b5679dec967576b508525a",
"assets/assets/2.jpeg": "146f171acc1ab9ff4dc312349e7a7ae3",
"assets/assets/2_reading.png": "5c37cf71dec807338ba4c83d2e840b4a",
"assets/assets/3.jpeg": "9b52416343d1ab6eba88d5905df9ec4e",
"assets/assets/3_listening.png": "678b980c016b58105093878464a51877",
"assets/assets/4.jpeg": "add0d2c07179b6eb8057bc05dc87c432",
"assets/assets/4_watching.png": "6cb26b7ee317ec96895ca0b43c6f37e5",
"assets/assets/5.jpeg": "0dfe185f4c56f1be60c830405dc13300",
"assets/assets/5_visualizing.png": "b2d193a2a31bf62d73d2430bbff5e6ed",
"assets/assets/6.jpeg": "202ff0dcfacfd10236a9deb9994279b6",
"assets/assets/7.jpeg": "0acf466c1f74acee775e6aa49ee0b0ad",
"assets/assets/8.jpeg": "6342a3a35c3d8f2166579238b1e0cc92",
"assets/assets/9.jpeg": "9125f4ba6e1f11516ff45767fd18488c",
"assets/assets/about.png": "36092f442ba3bcda8a69b4dd8497a446",
"assets/assets/apple.png": "f5ecf7d9b77b8b9df52a67cb63d2976c",
"assets/assets/app_icon.png": "a68d022d251c745ccb13e0d33494b54d",
"assets/assets/arrow_left.png": "84e699f0e294769e4a803bc09803e270",
"assets/assets/arrow_left_dark.png": "84e699f0e294769e4a803bc09803e270",
"assets/assets/arrow_left_light.png": "d98c5a5e1afa93afed71ff4a11b58551",
"assets/assets/avatar.png": "d0ee6b7d1f16a43ccc34d7e35115d3e2",
"assets/assets/business.png": "5530b1e44e8760996558a9da0ec57e5e",
"assets/assets/buy.png": "23ebb0247988dab759483b0b73df44ee",
"assets/assets/email.png": "3e08a0f573b1d2c8aa78b452ae61ac9d",
"assets/assets/empty_library.png": "6930f5212507c1e2667a4d7cecc0a573",
"assets/assets/facebook.png": "910597bb8ade4f583b55705fc91f7ce1",
"assets/assets/financial_education.png": "0bf3377cbcf231859dde49e7810ac08a",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/google.png": "a7237f2df7a79b512d05dd941071fdd0",
"assets/assets/heart.png": "0f54161e27e881140b23ee9ffc203de8",
"assets/assets/home_off.png": "44f51afdb280c31e593fbea1018b1443",
"assets/assets/home_on.png": "347bcee197dcc62f95499ad86274b9a1",
"assets/assets/library_off.png": "a189de449893bbd3246c0dc400e7f54c",
"assets/assets/library_on.png": "5c633a104b84df6cab691a7672556906",
"assets/assets/listen.png": "40cb5c1419afea332c7b0cfa5724ae12",
"assets/assets/lock.png": "3bc2f5fba7a5128fc892f240fe13237a",
"assets/assets/logout.png": "030c1d0a1882bde7c50ecc4b1faf7667",
"assets/assets/o_listen.png": "f0de2e544b2af3229a2d3c988f8fd4bc",
"assets/assets/o_mindmap.png": "41f296e4c1d4559f7d3c92ce7cc43a66",
"assets/assets/o_read.png": "454bb6f8f87d0389803bd0ca6aa67e01",
"assets/assets/o_watch.png": "08cbfda07efa31573c133370e953a342",
"assets/assets/personal_education.png": "240c0bacb50fc7c3317aa3162e61cf11",
"assets/assets/play.png": "7193bccc4c9dbd0f9f15f79bfe578140",
"assets/assets/pricing.png": "80f80939a373cc6e74b30a062dd86141",
"assets/assets/productivity.png": "7507d5a7611f38428bd678e627df9b11",
"assets/assets/promo.png": "8717d8cac85d66819daded723f38d2ec",
"assets/assets/read.png": "5ee5b07b070b045bbb7e2a4ff4ac0fe0",
"assets/assets/refer.png": "724b6ebb3f131db33f1fa6cdfb41c0e8",
"assets/assets/search.png": "46ebc037a827552c05b53a26cc3f80f4",
"assets/assets/search_light.png": "9683bc04a85e4ea8718efd621e6fc122",
"assets/assets/settings.png": "ea05b55127779baf7c9112c9bd7aac88",
"assets/assets/settings_off.png": "452ee5f3be34ba884b500ad3338f2f51",
"assets/assets/settings_on.png": "5bcc42f37f82443e38b2532cc00cb177",
"assets/assets/share_icon.png": "e1258d909417c7cf1c7ce89f86c29dd9",
"assets/assets/watch.png": "32064bfdca93dd9c19cc5cb93881414d",
"assets/FontManifest.json": "39be9010a6e1b80877f94243453b8ea2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ac8a9f95fe6d3b1acb24f69beff6b7d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "edb3c606c866fd810960acd2f65b6be3",
"/": "edb3c606c866fd810960acd2f65b6be3",
"main.dart.js": "d99f88e3fb0ff2c6613ed04c085d220b",
"manifest.json": "7cf1661ecd50125ecc4a326c0861cf48",
"version.json": "b7386a882e41fdca20a2f3fcc672e8d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
