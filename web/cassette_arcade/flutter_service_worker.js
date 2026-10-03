'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e5567c9d7d5ba705b5f1295f9c7f5d73",
"assets/AssetManifest.bin.json": "b8ecaac37a1c7ea70e3e5d7006dc7fdf",
"assets/AssetManifest.json": "7dac6ce9ae78af4d94dd1715c77f407d",
"assets/assets/audio/music/arcade.mp3": "5ae4f0e60dbece2cd648ffe9f3918bb0",
"assets/assets/audio/music/battle.mp3": "ba0d83dcf57a7a6c8cfdf1afe3de5d7a",
"assets/assets/audio/music/boss.mp3": "111eedead30a60594406ded7151ee9b6",
"assets/assets/audio/music/clumsy.mp3": "5c6c4c819c749f4797dc49c4387d2240",
"assets/assets/audio/music/crisis.mp3": "97708c62a159289c4b57bff879dcf688",
"assets/assets/audio/music/darkness.mp3": "be15d8ef66af10c7b1064687dcd14bfc",
"assets/assets/audio/music/dungeon.mp3": "900067d79184e24c4b2a91f74ac76896",
"assets/assets/audio/music/evil.mp3": "e66e892da85c1f7131b2690779503464",
"assets/assets/audio/music/jester.mp3": "960dde3b4c2adc4d3aa4b5953a20f000",
"assets/assets/audio/music/map.mp3": "467506b05cbb1ff70a971c6bff1dd1ab",
"assets/assets/audio/music/mechanical.mp3": "58ffda36f950a409f920846bdb71264b",
"assets/assets/audio/music/mision.mp3": "5c5b6dfd7c27187aeddc822a4c01f074",
"assets/assets/audio/music/monster.mp3": "ddb8ee867f1afb4e524ab83e4eeafab3",
"assets/assets/audio/music/monstervania.mp3": "e0c5ce2ab3ebee14d61880c6437fc257",
"assets/assets/audio/music/planet.mp3": "0c97192c92a15e33b26666dbf5f66aee",
"assets/assets/audio/music/pressure.mp3": "d332f179d9c583214a429e07aa9ea0af",
"assets/assets/audio/music/rush.mp3": "75a919819cf0ab317d1767bb934f856e",
"assets/assets/audio/music/space.mp3": "1ee638ecdb56782d5721bc3e46ebf6d0",
"assets/assets/audio/music/spy.mp3": "e9f1aba0f9ce8fdb15bd71d051b54253",
"assets/assets/audio/music/theme.mp3": "f69ae3a67c8e8c6ff6df89fca2c3b103",
"assets/assets/audio/music/tranquil.mp3": "265ae1f41389ca7d846b7cbabce8c623",
"assets/assets/audio/music/truth.mp3": "0c6fe4ded7e8142801a76e86a2fd0b2e",
"assets/assets/audio/sfx/access.mp3": "389c3bc403fa1c3376a5da570e7f3fd3",
"assets/assets/audio/sfx/action.mp3": "8fee7f6a87b99d5ea7b120bd13151875",
"assets/assets/audio/sfx/colision.mp3": "6d2846ee94a1d7900756ec842ba1afae",
"assets/assets/audio/sfx/eat.mp3": "806b74cebd4b145991f13756fb6eb3d6",
"assets/assets/audio/sfx/enemy.mp3": "23f2ff207923173cecf05600e7ed8e70",
"assets/assets/audio/sfx/extra_life.mp3": "08eac360e0f8c35e79770ffef44de8d4",
"assets/assets/audio/sfx/game_over.mp3": "36f896c66e60b1206bced36d0894e877",
"assets/assets/audio/sfx/important.mp3": "e4f2fd420bdbd13de15ed53c544d21d7",
"assets/assets/audio/sfx/lose_life.mp3": "d8fa727e5447e60184568db88b4cdc96",
"assets/assets/audio/sfx/move.mp3": "9feebf4c1cefed1abaa094e5012cde28",
"assets/assets/audio/sfx/pause.mp3": "ba12f13581635bda93527be3c8dfe1a7",
"assets/assets/audio/sfx/power.mp3": "b5024b817d2d74dd9c0504f08c027245",
"assets/assets/audio/sfx/score.mp3": "4a65a62e78ac33339bf04c8ff67eba51",
"assets/assets/audio/sfx/shoot.mp3": "2a473904159bac00e054d40fe47a7048",
"assets/assets/audio/sfx/start.mp3": "35239cf5c460651d77cac620709971f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ae3d3def2ef03b376b87935a36c23a80",
"assets/NOTICES": "c035e779b7f6e197342f7c48e997b114",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9134469c77d3837f8dfd646d096005d6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0c8b6e85b581431fedc6b471cecceb6",
"/": "c0c8b6e85b581431fedc6b471cecceb6",
"main.dart.js": "3dabfc34b7d21b9fc72265f91c801261",
"manifest.json": "b60a15327d8d8ed113541516b1a21dbf",
"version.json": "96fb5034dd1ca017bbee04648aee6fc5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
