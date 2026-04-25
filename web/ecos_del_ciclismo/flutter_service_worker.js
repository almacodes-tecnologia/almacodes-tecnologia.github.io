'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "71f604d0fdf92f596ebd80abc82e2fe2",
"assets/AssetManifest.bin.json": "f0d9588ce4887aceaa461be40540dfc1",
"assets/AssetManifest.json": "7afe1741d6ce91c7bf2ff4201f8b9fd9",
"assets/assets/hall_of_fame.json": "3a3f30a2f7536fcffb76c68f35c2bc5f",
"assets/assets/imagenes/altimetria/alemania.webp": "1affe6e564d137e3344030ee6cc62e82",
"assets/assets/imagenes/altimetria/andorra.webp": "64efc63ae6d41e9fe1db619975625215",
"assets/assets/imagenes/altimetria/argentina.webp": "b47f0b44e2e7f4aae25e1b84ebaf09b0",
"assets/assets/imagenes/altimetria/australia.webp": "23f0c565ec17ff0791b6d3a67317de01",
"assets/assets/imagenes/altimetria/austria.webp": "b6b24e90c89f702ab5a154a477b4da14",
"assets/assets/imagenes/altimetria/belgica.webp": "035daf90407982e400b006390d26ba4b",
"assets/assets/imagenes/altimetria/brasil.webp": "9046ccb2176ed73947007a0dd300f8d7",
"assets/assets/imagenes/altimetria/bulgaria.webp": "165789ba0982c4a80c67faf3a1c24d53",
"assets/assets/imagenes/altimetria/colombia.webp": "c7cad0b3679f252eb8a7807d65a556ba",
"assets/assets/imagenes/altimetria/dinamarca.webp": "435bc11a1f8844c6dedf206215b14e2f",
"assets/assets/imagenes/altimetria/ecuador.webp": "9a62ca5516279c110c335ad4569ef64e",
"assets/assets/imagenes/altimetria/eslovaquia.webp": "fd7d52295a9bb50a40eae797edfdc8f5",
"assets/assets/imagenes/altimetria/eslovenia.webp": "3e8da31352cc0cf202996139c828c9ff",
"assets/assets/imagenes/altimetria/espana.webp": "f635d2315fee9a4d9ded37ef56f7098e",
"assets/assets/imagenes/altimetria/estados_unidos.webp": "ceb3e9187bab5e625a38924d4580ca8b",
"assets/assets/imagenes/altimetria/francia.webp": "1b7bf019c392547ae36fddf142b4d07b",
"assets/assets/imagenes/altimetria/grecia.webp": "3df32600d8d28cd488c29ef9cde71a64",
"assets/assets/imagenes/altimetria/hungria.webp": "bc65215d53f2bdd7735904634fa894f2",
"assets/assets/imagenes/altimetria/irlanda.webp": "6323541171cb02104790d58830d91aa5",
"assets/assets/imagenes/altimetria/islandia.webp": "5554996068a31a26bf28377d6c58549c",
"assets/assets/imagenes/altimetria/italia.webp": "6b11bf673bce549f6e1c1b5f1506164b",
"assets/assets/imagenes/altimetria/japon.webp": "9d6743e8cd0cf5f3ab62c9122a31aa01",
"assets/assets/imagenes/altimetria/kazajistan.webp": "bfa3c5eaf6c5d4218779b64626851806",
"assets/assets/imagenes/altimetria/letonia.webp": "489ac131b1912c0b89de5beb3bfd446b",
"assets/assets/imagenes/altimetria/lituania.webp": "6aa98746c9673d8cd5795cebc7bce817",
"assets/assets/imagenes/altimetria/luxemburgo.webp": "1bdd576e9336492b2b6e24aefcaed6b2",
"assets/assets/imagenes/altimetria/marruecos.webp": "ba03016d17ec219e34a2b453075c3ac4",
"assets/assets/imagenes/altimetria/mexico.webp": "e86d1528678503d3724f176da9d36f0a",
"assets/assets/imagenes/altimetria/moldavia.webp": "2234cc644cde11bafdd7b5aad58a466e",
"assets/assets/imagenes/altimetria/noruega.webp": "8806bd619b3538a4945d07cc63b2624b",
"assets/assets/imagenes/altimetria/no_imagen.webp": "139c9ca0af6008da9ff3ee8707689740",
"assets/assets/imagenes/altimetria/paises_bajos.webp": "956022ef72304651756889b4d3f50a6f",
"assets/assets/imagenes/altimetria/polonia.webp": "d2299dcdc9fc10ef6e2505502e251aa4",
"assets/assets/imagenes/altimetria/portugal.webp": "9804ea1fdc04c72ba73be1e88a35e9f4",
"assets/assets/imagenes/altimetria/reino_unido.webp": "5f619f6346bceb95bf9606f467d082fb",
"assets/assets/imagenes/altimetria/republica_checa.webp": "932a25210fe7fd31f4aa826c08b4e731",
"assets/assets/imagenes/altimetria/rumania.webp": "ccb2bdf3ba7710ac674e8e0db935afe0",
"assets/assets/imagenes/altimetria/rusia.webp": "3aa23cc4e039acc67ed46f48e86af3d5",
"assets/assets/imagenes/altimetria/suecia.webp": "df160ad23030c28c942b419ad6dff020",
"assets/assets/imagenes/altimetria/suiza.webp": "e4d5928945ccdd84f2112b544a39eb03",
"assets/assets/imagenes/altimetria/taiwan.webp": "442acb9b6b7d5700750f8c47e3b920fa",
"assets/assets/imagenes/altimetria/ucrania.webp": "fa7f7b7e2a0045f98250c21dd949b53a",
"assets/assets/imagenes/altimetria/venezuela.webp": "0b257f882f954b3f7b753152daad666c",
"assets/assets/imagenes/carreras/amstel_gold_race.webp": "a1a173c5c0c0edd5b721c366f9324331",
"assets/assets/imagenes/carreras/a_traves_flandes.webp": "d5ab4966e5242050863de955ae889171",
"assets/assets/imagenes/carreras/benelux_tour.webp": "d4502e32da216b2e2973d9ca8b565705",
"assets/assets/imagenes/carreras/bretagne_classic.webp": "2f7cfccff10e1b05fed8bf1f26b94128",
"assets/assets/imagenes/carreras/cadel_evans_great_ocean.webp": "cdfdddde04d462a9323a12fe2dc0e908",
"assets/assets/imagenes/carreras/clasica_brujas.webp": "72e1d435feefd576b344745b3b6971f6",
"assets/assets/imagenes/carreras/clasica_de_almeria.webp": "0da4ff858e649aadb6c2332090cbd6bb",
"assets/assets/imagenes/carreras/clasica_hamburgo.webp": "e8ed1e97dab78ba4ebdb355444959312",
"assets/assets/imagenes/carreras/clasica_san_sebastian.webp": "00853d7f0c6c529977a7f2a8cc794678",
"assets/assets/imagenes/carreras/copenhagen_sprint.webp": "d40e8b1522a12e136efe31d56f07c243",
"assets/assets/imagenes/carreras/criterium_du_dauphine.webp": "bda946d4c7d10d98a1512c72bc8f9598",
"assets/assets/imagenes/carreras/e3_saxo_classic.webp": "db5225e034c9acc45e8b8b4df6df77fd",
"assets/assets/imagenes/carreras/euroeyes_cyclassics.webp": "ba9d3982820072edb0eeb0e58751cd35",
"assets/assets/imagenes/carreras/europeo_ciclismo_contrarreloj.webp": "45e575e0b21ae377edff90867411ebe1",
"assets/assets/imagenes/carreras/europeo_ciclismo_ruta.webp": "8fda8e7bec70810094f685fd08302522",
"assets/assets/imagenes/carreras/flecha_valona.webp": "72219b48afabdd78728259070cf6f56a",
"assets/assets/imagenes/carreras/gante_wevelgem.webp": "0aa4ad97095d71c2f10d39f421f8d8c3",
"assets/assets/imagenes/carreras/giro_de_emilia.webp": "b70108bc8c9dcfc627d02443d1e39417",
"assets/assets/imagenes/carreras/giro_de_italia.webp": "8845ae260304368923cb00483ccf9ad4",
"assets/assets/imagenes/carreras/giro_de_lombardia.webp": "10aff6c396df63dc20d8fcbfa3b0db42",
"assets/assets/imagenes/carreras/gp_montreal.webp": "46f6ca57c2fe24e826c2135ee11f8c06",
"assets/assets/imagenes/carreras/gp_quebec.webp": "819b18e597eb7869f58b6bf7a0e46820",
"assets/assets/imagenes/carreras/gran_premio_de_francfort.webp": "4265dc84929e0e10b8d8bbca9efc1ee6",
"assets/assets/imagenes/carreras/icono.png": "22b17691a9d076268ad564e9d6eb4e16",
"assets/assets/imagenes/carreras/jjoo_ciclismo_contrarreloj.webp": "d95c9729adb2ff5b29dd1add3e28a083",
"assets/assets/imagenes/carreras/jjoo_ciclismo_ruta.webp": "7517043d32c81d5efe774bd8ce9cd025",
"assets/assets/imagenes/carreras/kuurne_bruselas_kuurne.webp": "8bcd4ed4b45de53c45b04e1141cc9ad1",
"assets/assets/imagenes/carreras/lieja.webp": "c064be29669f193cc21ceb763d73cc7d",
"assets/assets/imagenes/carreras/milan_san_remo.webp": "a74bb1024c2da588f632711780612cd2",
"assets/assets/imagenes/carreras/mundial_ciclismo_contrarreloj.webp": "ba743bd6ad15a2dc61133f2d7167d479",
"assets/assets/imagenes/carreras/mundial_ciclismo_ruta.webp": "b60fa33b86846e4d2a7757982040f17c",
"assets/assets/imagenes/carreras/omloop_het_nieuwsblad.webp": "13b67c0eec6ce5089038ce6c9afbec43",
"assets/assets/imagenes/carreras/paris_niza.webp": "627e96fc0f9b111c5fa4d4604bf78f04",
"assets/assets/imagenes/carreras/paris_roubaix.webp": "ce6aa9e64a9d8440d0993e6f8fb790d2",
"assets/assets/imagenes/carreras/santos_tour_down_under.webp": "eb69b05fd3eb8eb4f27e4164811c5d50",
"assets/assets/imagenes/carreras/strade_bianche.webp": "365728c489c698fabaeab5be6d89b6a6",
"assets/assets/imagenes/carreras/tirreno_adriatico.webp": "6ff89740b5ecfbcc8893b66be49ad86d",
"assets/assets/imagenes/carreras/tour_de_flandes.webp": "21f92215711bf8272ba927e3ada5142e",
"assets/assets/imagenes/carreras/tour_de_francia.webp": "0e0f4f5aa434b8470bb4cc1d16af96e1",
"assets/assets/imagenes/carreras/tour_de_polonia.webp": "0ad771f401c9d29882022e1973dd3373",
"assets/assets/imagenes/carreras/tour_de_romandia.webp": "ff79cd4338aa21dabe940289cbb80688",
"assets/assets/imagenes/carreras/tour_de_suiza.webp": "1e62976b0d9b892edf7f484c53593210",
"assets/assets/imagenes/carreras/tour_guangxi.webp": "3eec9a32da2cb42dd093c1fc467b506d",
"assets/assets/imagenes/carreras/uae_tour.webp": "7581c3b919cdb2ca73adb0ce274c71be",
"assets/assets/imagenes/carreras/volta_ao_algave.webp": "a135c2bd9babbdd9a7d9e0fbf7a4bae0",
"assets/assets/imagenes/carreras/volta_a_catalunya.webp": "26af78276f2ecbc4ce9cc7312670e92e",
"assets/assets/imagenes/carreras/vuelta_al_pais_vasco.webp": "3a8296c63076d9766bd23a451faad002",
"assets/assets/imagenes/carreras/vuelta_a_espana.webp": "bd3006d9c96b1907d37103fc8e31ac97",
"assets/assets/imagenes/ciclistas/alemania.webp": "3f42fbc8c660332dac89872835df3f44",
"assets/assets/imagenes/ciclistas/argentina.webp": "d76b709a3cf8e8086bbf987c4104a0c9",
"assets/assets/imagenes/ciclistas/australia.webp": "d6e26bb9632e4eba73ae5842ae0907c7",
"assets/assets/imagenes/ciclistas/austria.webp": "2bfe4b5b98d6addf2c927d0a1bc0e7d7",
"assets/assets/imagenes/ciclistas/belgica.webp": "5ea365fbe601164de21e8a7be9a5b5f2",
"assets/assets/imagenes/ciclistas/brasil.webp": "25bad34c728d34a8bc4c31069d03fd9b",
"assets/assets/imagenes/ciclistas/bulgaria.webp": "72f2f22edbf0681c539e28388b574b58",
"assets/assets/imagenes/ciclistas/canada.webp": "381323be3c016f48dd7e7425f4e2859b",
"assets/assets/imagenes/ciclistas/colombia.webp": "fdfa2f17e03d1eff448c6b2f0d659fa1",
"assets/assets/imagenes/ciclistas/dinamarca.webp": "e88b98ddff6ec3e8748652cc22f9272f",
"assets/assets/imagenes/ciclistas/eslovaquia.webp": "e99fa3f378c3a8a442d4349f0bc0d922",
"assets/assets/imagenes/ciclistas/eslovenia.webp": "90abcb3e2c560ab28e22c0b93eac0cd5",
"assets/assets/imagenes/ciclistas/espana.webp": "f13d38345d01cb1cbaf6f9042c303eaf",
"assets/assets/imagenes/ciclistas/estados_unidos.webp": "33b6f6bfce5c1f37c24ddcb77a9d92b5",
"assets/assets/imagenes/ciclistas/estonia.webp": "b3dd351b6e27247d3c3242962b88f1dd",
"assets/assets/imagenes/ciclistas/francia.webp": "b05ca4e319c2f613e826f7c6cc988e2a",
"assets/assets/imagenes/ciclistas/grecia.webp": "81a0cc1c9f56628059a9588d29ad381f",
"assets/assets/imagenes/ciclistas/hungria.webp": "49728e247b89fb12981a15b6e1bc95d3",
"assets/assets/imagenes/ciclistas/irlanda.webp": "f9157cd7c4b20b867657d6c073930e58",
"assets/assets/imagenes/ciclistas/islandia.webp": "bc8502ad8e801130a523c930b64389c7",
"assets/assets/imagenes/ciclistas/italia.webp": "21ecfd97d8f090afda2c61454cff2032",
"assets/assets/imagenes/ciclistas/japon.webp": "f0ef79e742fb2f201ea6ccdb3c1a0ceb",
"assets/assets/imagenes/ciclistas/kazajistan.webp": "138ffa3f5b81fa3408bf0e2c5f2a42a2",
"assets/assets/imagenes/ciclistas/letonia.webp": "8736958e9b3268e314751fea0a69de2b",
"assets/assets/imagenes/ciclistas/lituania.webp": "58af4d1da2b2d6fa85acc51660d1fdfd",
"assets/assets/imagenes/ciclistas/luxemburgo.webp": "95a5ea0cb7b87b4eae900a17ee916752",
"assets/assets/imagenes/ciclistas/mexico.webp": "55e76570c77fe67b3b67b75a14b535d7",
"assets/assets/imagenes/ciclistas/moldavia.webp": "0cb3e019826a73e58104275fc448b7ab",
"assets/assets/imagenes/ciclistas/noruega.webp": "a4195827bf6eade2a739a6b2c696311d",
"assets/assets/imagenes/ciclistas/paises_bajos.webp": "1b7cd6cc4f03e535598d1e798bb65513",
"assets/assets/imagenes/ciclistas/polonia.webp": "9258f33507c726b919a514064c278a2c",
"assets/assets/imagenes/ciclistas/portugal.webp": "f714893ce1652aeb0381d8ae9ab00812",
"assets/assets/imagenes/ciclistas/reino_unido.webp": "bdbc685705db8f9575b5b4a3efb89ac1",
"assets/assets/imagenes/ciclistas/republica_checa.webp": "d4321068fc28e25fb21fb8749a2e7194",
"assets/assets/imagenes/ciclistas/rumania.webp": "597c1638340b4fbd080d1b7133320ec5",
"assets/assets/imagenes/ciclistas/rusia.webp": "b3b90c25cccc31b61e981250030c2deb",
"assets/assets/imagenes/ciclistas/sudafrica.webp": "a1a514a5c00d59d15a217cbfcef43091",
"assets/assets/imagenes/ciclistas/suecia.webp": "96a1866684746d6be0676a53f1628034",
"assets/assets/imagenes/ciclistas/suiza.webp": "97074d4cb331e47fd79400d029afee6f",
"assets/assets/imagenes/ciclistas/ucrania.webp": "6c19ad28b3abce6bb64d80e4e994f953",
"assets/assets/imagenes/ciclistas/venezuela.webp": "98ac64e328eaec39cb6ed6a85de3842f",
"assets/assets/imagenes/iconos/icono_ciclismo.png": "9a04968e84f73226e68c1e404d07ed98",
"assets/assets/imagenes/momentos/ataque.webp": "9b9ddd206502db3d02831b9994f3d803",
"assets/assets/imagenes/momentos/caida.webp": "5cabd60166809de783d9e7d15e38552f",
"assets/assets/imagenes/momentos/contrarreloj.webp": "d26943ac0df522bd28b5f2bda46e3eb4",
"assets/assets/imagenes/momentos/crisis.webp": "a31a884d44a30ed60970899d4bb6c669",
"assets/assets/imagenes/momentos/duelo.webp": "470c88af9c2b071f06aec5e02aa8f667",
"assets/assets/imagenes/momentos/insolito.webp": "38f310d67b90900a146a42266c2afeaf",
"assets/assets/imagenes/momentos/polemica.webp": "4687dac0638d78f648cab2955d405534",
"assets/assets/imagenes/momentos/record.webp": "4b85e98479a0c734c8b397b550eafafa",
"assets/assets/imagenes/momentos/retraso.webp": "6b549dd6cfa0be8315a6494e9d90e624",
"assets/assets/imagenes/momentos/tecnologia.webp": "35c2b442bca792fb450ebb0b607e9577",
"assets/assets/imagenes/momentos/victoria.webp": "485c0f5a76dd85d15f6083a276888b79",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0aa66dec1906dedf463a65d8d46e8aa4",
"assets/NOTICES": "cca6283c23de99569725088ba52b27e8",
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
"flutter_bootstrap.js": "30882fadbc94fc525a665356c4f846a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11019b99e0c6454412aab9090677e57b",
"/": "11019b99e0c6454412aab9090677e57b",
"main.dart.js": "5b3dbb66b612f0dfc0066c5446446fd9",
"manifest.json": "59cba84417d7c69bf9a79f18835c2114",
"version.json": "8edde3ec6a07cf28fc2439b5669e421d"};
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
