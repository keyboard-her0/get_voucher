'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6c2cab7353bd3e8ffeba53ac635f237f",
".git/config": "dcbb1b590901338bb3cd57ae418a9c9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa406d8031368a0338406994b0527dbb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e70124134b2c93f87f34d16870e0574",
".git/logs/refs/heads/master": "4e70124134b2c93f87f34d16870e0574",
".git/logs/refs/remotes/origin/master": "9ec5e2fe196accea6924df8338300420",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/179377cbc71a2b5a9152c6349cdde90a5cdaff": "54868406b5bb459210e858bf484ab2ad",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/ce5d9596810beef03a94b9e317f5db469775dd": "75cd1926ba018a38a722436e43e21d73",
".git/objects/16/f0b9b6f77a5b1f0d312006e83adb2295f32e1d": "1ff2e4cf6703b5fc9a7a93fb9f8d10b0",
".git/objects/1f/beb26a889abbbd60a3b245b54ed3ec255565ec": "8a3b9ab89ed53c263b82aa887048990a",
".git/objects/29/885b171f9a0872f95479189cda2f23d26e5f4a": "e397be393de70a1c048cb16ad322d786",
".git/objects/2b/a3a4e76dce9641cd1f8eee1c3af80a49508f88": "f39a02a77c7485d8de55b4bd96313c94",
".git/objects/33/368a470cef2c88359ee3d3e2ba8344fee0da27": "8106b7de46318f48cb099ca03028a06a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/344fc9251b06bfd9f45b55ac7074aa5ea58519": "ce67a5131ee6cf9d5a19c4816863bd74",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3f/2de25e33d37f2ea2d60f3820e59333d6416bdb": "498a63d882a1e4149e3ab20852c36243",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/c649893301add54ad3988517ef98120a7610ae": "a86568e16945ae7b7a4415c0502f9f2a",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/5f/8c22d68344001ff80dd1b5f04a9c09093a1911": "0f2dfb9cd7a71bbdd312687111d7cd4a",
".git/objects/60/b78df0893eedaaebe22f6022f83b5c195c9b01": "b7ec98cff7b4aa37b957336a3a0c286e",
".git/objects/65/2a24cda96e6eca031887f6f5d50bc4d2bbea63": "1e4f75ddb606363fa8812863b3390cee",
".git/objects/6e/f1382897b2556491953feb4d8ae6396c8f689d": "953150f12a986e79a3ffa4daca3e6c8b",
".git/objects/72/5dd3c06e1642dcb83acdd10a165d7a78f3caa5": "661f4a741c0672ef40a5852a1d531b0e",
".git/objects/75/64f68e9cdd4aea8db9af72d65f842961c62a06": "fa33d64b4770b9d4a7986b700db0a3d7",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/94ade9835e2ee7600c427a2c8cf50a9951d2f8": "ec368262ed06c94caf3dcc2a4cca4e3d",
".git/objects/7e/31d9124863bae6dde012f9b4e9507e5eca838e": "c18ef8c8da49e98423feeb779379e2d6",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/55c379b43ef04b764b39304b541d38eaebec66": "15df5e1e2d9a3c7d520795d46e21cde0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ea9de647bb59b1c666bec5c0333bf59e4797fb": "7a25a9d31c409e7514e6c9f0b750d5cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/06f7a7735a20fba9ead630f1109cea93aaa036": "fe8bba150e70f95560b7cdd7c94e1f19",
".git/objects/8c/979529cd9003c40df750f8ecf77c1b6855d490": "58972be3bb6c032292485f301cf70c1e",
".git/objects/8e/6242c8e6a6615d9305c712ffb5f2a7dbf71689": "6070751058f71c9422bb30a87fae4248",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/21d5f8b66110c8db5cd509292f3646bcd81ab4": "d96bf533f22a9aaf3edcf6ad81840f2c",
".git/objects/92/46b57502daf767d3cb86e04837c6007bfe6b8a": "9d7157118d1a5cc767e8dc51052f9dd3",
".git/objects/94/0c3f95f409d0c9aa457472315c78dd1a43d853": "efe2a901526ede025f5db140268f4455",
".git/objects/94/15247a65c776597bd876b9f5c5b43373687687": "21942ba642362e51ec37e4c0142a6ce9",
".git/objects/94/32bba3b4f8b71046d543c9f0efa0cbaeaf65ec": "888bb11f340944bb802fd7ba209aea14",
".git/objects/98/b416c6243ccbc9a7e5908da824b006716e995f": "83cf6339b3d2361b7b5d2578d0eb011f",
".git/objects/9a/7b2d16e0a09b1cb9b6761b9aa6862259383cbf": "b2f5bc9f9df1900e58910e648fc82a11",
".git/objects/a2/56e66072665db0c94e523909a2fa5fe91647e6": "c87f9a37444e004951dae643caa4b71d",
".git/objects/a4/9774b754be4d10f3d06fd461e936bd39d7c4e4": "450ac7d5666cd852acd089bac563950d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/499b2a404f719e48e7c8847a5b1a80d543a6a7": "f479f89e04db57aaf083eeadf63148e3",
".git/objects/ac/def69fb748ba4262c6d7c3be2eab31f18ac9f1": "187a0d67f1637730bf7d7e1f405acf13",
".git/objects/b4/11fc6023f26bf78b278f64dd4818640b0fb74a": "1ecc3fb3fea7fe9f72cbc7441badc52d",
".git/objects/b4/909972479c676a91dea813e542f225aca766dd": "9a4ac6145b31b495ebbfb8c8553301ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e9485f0a947f3b659b7958f31584d5e9d84d6": "f73803feecc953f6096e19bf809c4887",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a315f6060bc7f8ab61fdd809c8749e16739edd": "58c1acbf0ffb9e4c0c7b95c4342bac10",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c6/8f2fdd26fdbd8541b00ecd91353ee4aa65a9ae": "9b8851cbc1eda6be4e8d6a55d758846f",
".git/objects/c7/36a14ffecb31e1db0d5592eb9db264d93fcb98": "08c1398e4203bbe99af8e5f269e033a5",
".git/objects/cb/5ca6b67e823739a51ca0f0ea9e2835511b1f76": "d91c4b2f59d0cf18ab1fe5c7d46e9662",
".git/objects/d1/762771b05bd158ad75270ede17305b61d43ab7": "1d6259917aaf33dd7061c4a87de09827",
".git/objects/d2/fa9813ab058d1b4dd90e87148015c2f404548c": "7d8c48cb7b48f6cd6d070ecbcc9072bb",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/de/1995a4e23997dcaf1090aa2d90d1f6e67d9efa": "a0513f43e3faa76ce743fcdc6c789613",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/0e0b218def02dc014419bcaa42282d15514e8a": "e388df8f71b4b4fde0a2da284a517b36",
".git/objects/e6/87873fc291ebf639b2ecc3177e243393d55299": "f14d22fae046d65b16d14b9fbef72e5a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8050a734792bcfdd0c29525f52d7185739eea7": "a9b29a8724619f73a73fc56a321497da",
".git/objects/f3/156dcc79b290cb887f9ed5cdb8a8de1eab7222": "4a3d0aa5a0daf6b73e07e2afcb605569",
".git/objects/f6/bea28ada70b78e45c5e27ecb895d565d4a2898": "c88e59dcdadfcea86a4ec335206912bd",
".git/objects/f7/5f5d99f83f3948ea8e10a721dca5736bc95b69": "1651ca8477db4dfffe29f90f9d90c6e7",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "b192f0d6898b39c5be5ee12513e9f1a9",
".git/refs/remotes/origin/master": "b192f0d6898b39c5be5ee12513e9f1a9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "11de6250af0d5a3e771977e5c630cc3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "4055980e448c6cbf2e243759e272243d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "09a6f3056d5ad5c7cb04127ee0a20c52",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b61e5676a0627fc9efa3e2cadbae84ea",
"/": "b61e5676a0627fc9efa3e2cadbae84ea",
"main.dart.js": "67d73072972bf2fa628f1ae0c2a21d97",
"manifest.json": "09ff75f564a04c807217db963d7a09ba",
"version.json": "580d1bfdd36de98170bceb43e0e008e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
