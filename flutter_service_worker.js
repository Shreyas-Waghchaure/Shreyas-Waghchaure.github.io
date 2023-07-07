'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ea3540fbd69dd4b6cef4a3e76d9a1226",
".git/config": "baa1df7bc1dd0803ae944bc0f4a08187",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "64b62d670f4577ed0252bcc03f566a05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "caf259f82ba1696429930b963a917b96",
".git/logs/refs/heads/main": "8d1b55a5e97057204ea928971e08a2af",
".git/logs/refs/remotes/origin/main": "ff53d43e79f729e0fddeed3ec6fb8aa8",
".git/objects/0f/dba3726fe6d9ab708a54f308bec072eb8212db": "9c9c419b6f276e397e870f749a66d630",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/a3a045ab7e88d75c26e6a48697626d71d866fe": "50a92023d6e3c75bc6817e166c72857a",
".git/objects/19/4d064428230f025b0bdf8a454abe8c28fa9aa9": "8141a9599d198f34e76d4f930c977325",
".git/objects/1d/b99c1eba46e7a8ce464645391d9fd0a1efc8f9": "637e09dc808cd46c328220c143aeebc5",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/32/196b51d07ede3d02d8905b9c8fbd724887b2e6": "96848b0a3bb5f039ded20ca3e3600bda",
".git/objects/37/14a10c85fe619e13df08561762ebee4fa06a06": "cf840d94cd4c6d610f945ca1d9027b17",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/351270971260321b719db70a9ca78dd0268228": "2490ac3051b28fef7f1aa9a364a6c6bd",
".git/objects/3a/6611e8cf42f71c5d50da7fd8588c20551dffc3": "7893c64be1ebdcd4f4e44d3615ad05ba",
".git/objects/3a/f6b667f606160ee76b035fe94d2598acf799ce": "63d1452be56bea6f7198b56ed6c8ea4a",
".git/objects/3b/39243b428ab679de5bf062a80566624ccf95ef": "a587353ea51f61c08383a63646ca1bbe",
".git/objects/3c/8bb9e272a75e4535b379793a08f4b72375ecde": "b8bf0dd6dd18615bb878f5d98b1dca97",
".git/objects/3e/92fda9d8e44845392ab286277f8a910fb9e02d": "6398bd4e50999e61a0ca3a910c43c614",
".git/objects/3f/272df40f30aab0650359511878b595e0ca9e50": "5f42d9082656c6bf3f5f4815255be7a9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/d946444ee9f0548d66779eb1cbd2fae738070b": "fc178c4f2b3e44c604eedb6e8686a5e9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/1975410f31f6022ff20faa532a255400d54b19": "a0e0516739713df40c39f90057fa43f3",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/0dc2a09bcf049baf82c8f1e5f4f122c003e8cd": "3084292ec41114901ae87767961c8e1e",
".git/objects/4f/146dc17c497018a88fc3e081d091eebbcc50a9": "4f493c0aad65fa84387d163f72c8e5b5",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/1255d57d175843fce2dc686f3ea2fe86cf21aa": "8385cc5aabc0f366f291402505ddbb41",
".git/objects/59/db83f1131f103aeb9100c6ddda9984d9230361": "e29a15a52e8e0cabb168076712da97bd",
".git/objects/5d/07e51b42ba021d6039a8313e5d9e03b5fc5c05": "fb4e4624918cf23af931dc4b2b5e5842",
".git/objects/5f/4a88fa6a5769fdb5b0b15c143e4916fc3a9de6": "29a58e27c55f40ce9945fa18fd0554bd",
".git/objects/5f/cbcd9f2000ebceddfb4fcf75b37935ce9f982f": "71a6d70e0b91749ddbdcc0535942a0a6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/4864991a72e9aeb5784bd1c56cafdb5cb484a8": "10beb7063950e57eee038d80fba10c35",
".git/objects/72/8f99d366e6f92672ea5f7416e8b439e1be5757": "caa684f78186a3a70591af11d6bb697a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/d3ee28212b0af68f1815580121bb3873acadde": "a9411dc751026e9f6b2f7855afd793d7",
".git/objects/79/23973662a7c6c7bb336520a3a281b77cb8619b": "73ae7ee673dfb4c7d00b65cd113b69ca",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/c359999f013cc49ab50d2591ab0bb555b931dd": "0bbc77969c9b1a81b4b28c126d718fb8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f7c6ca1f916746e4bcbd3f9abf683f4e4b3b72": "7b4e1ec499d18c3ba947cd5bd13ac919",
".git/objects/8b/fc20dcf76ab1fc6646adfa108ca462a7f1ab29": "a2caf241f0002319d3d3435989727318",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/9c/2f66a7718b0845471a0dec377e6ba08b391af4": "1a5b86134123630cbb9dc234e222586a",
".git/objects/9f/0f5ce335840fccb7449643daa6d1cfc5f9e2fc": "6a4e1d653ba77dd258f81adb1f578057",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/dd4cd35eb296d23290a017edc022534b18af33": "5c275a3a78d6da711ae5e45e5c3f3244",
".git/objects/a9/f161e7b41987e79ef2410e1b8fd0f194044e18": "91ed8a264c3f0bc904e881cd44bdbcf8",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/7b199268d2a0f41e8d864e7ae730f759e7a664": "8423a8c92c6a339ea557d49ec8168902",
".git/objects/b5/29decf99d9f96f92fef29b101796d0532db171": "e7c92cc2207dc5fddc16a01c62597e3e",
".git/objects/b7/0f85f11fa5c81a34d844a6c39185ba4eca90cb": "216c72d27f424d4e065f6d27544a7d4b",
".git/objects/b7/2117dac1431293db66349b7d57b48c9cbe0112": "4a962e20b53081334c6643634778db91",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/bdc3dc5cd505273507ce9beb5c06853a2e5655": "a95c5759a4ece930366b7e0fefc2c37d",
".git/objects/bd/2805a41c8f9fefaa3c6559700a08baef2c9a58": "8aace4dac4619248bc1cc648e07e9ee4",
".git/objects/c7/4354c0fbb293004ce9fcc7b8bc69d4fc8b4abf": "abfd4b22f3a72bcc31f3c912b4a2b664",
".git/objects/cc/6104d3c8f52a9292ad86215a2c6a706c969f52": "7c75f68192f879f6d8811026f1fac301",
".git/objects/d1/0797410b73a50a98f270adb2bb0c3f69f929e6": "d7951a89e8b28176a29b559a915d1168",
".git/objects/d2/ade81d8cf35f62315bbb12ab1dc13eabcceb22": "a8227ad48b9d91bd0f936e2333870d9e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2230d620390908c38cc65d54f90649101c19ff": "ac30fcd56dc6f5e5045a3ac39855a804",
".git/objects/df/020691bdac009a889c6e3e07f5106c95703391": "4479c8e80e6e10993749b7cea488812c",
".git/objects/e1/bc2c586eccb02748686ad893b4c486398152dd": "d77bd96ceae4f1c015fda489d756a1b1",
".git/objects/e1/e3a685a81cd609edb51ac9c59753b5f2cb2f7a": "c269b7cdc8ac2ffc98d1c5b3d38d2f68",
".git/objects/e1/eba636dd39f238db3437c7e64089a49e55cf30": "f8987dd2516374235667be2cba07b08f",
".git/objects/e3/9dd0015da5d6466d47f6afb020a068caf6ec3d": "b438ec21c7b175add17192488968f952",
".git/objects/e5/1543a2013395dadd98b6fe3b1db03563e5e746": "9df8c38aa1bccab357d721b70d84c3ac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/107f1e73c60e5d0c4aed2867fbaf2980df7f14": "87f2832a9c1746e61911702b0bd7511c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/93d3bffe24e2718f97007a2c1be23bae8d1498": "8a60262171b580d23fd28255127590c5",
".git/refs/heads/main": "544c4ecae1a5a04c4ac4ef7a04a9f122",
".git/refs/remotes/origin/main": "544c4ecae1a5a04c4ac4ef7a04a9f122",
"assets/AssetManifest.json": "abe21b25fb8c2525a3f6ccff3798ded9",
"assets/assets/about.png": "46b87a6768d0eced5cfe9df5dad97092",
"assets/assets/Dart.png": "6881610869385dbc21c163f49c7213ca",
"assets/assets/figma.png": "360f54eeed99df53bf253b4ad3233da8",
"assets/assets/firebase.png": "27b3763c6ef4e774cabcd5d278cf39aa",
"assets/assets/Flutter.png": "5a21c0ed2b3cc9e9192c9d460563a3fa",
"assets/assets/Github.png": "1fad12e2c173b101afc8354ca425ad34",
"assets/assets/java.png": "0f1d233433b119d455dfaa4735e3ec7a",
"assets/assets/picture.png": "941601d6525d7af44bf4c97fdad7c8b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading-gif.gif": "b1c79e0191b23becaddcd0356073745c",
"assets/loading.gif": "72f9c15f83e0b8c0d65873f017b1883e",
"assets/NOTICES": "9ee070deb91c073d88477d8f9644b9e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b127bd03c17d755b81c5b35f038e736",
"/": "6b127bd03c17d755b81c5b35f038e736",
"main.dart.js": "5a4c16a2cd616cc30aa5eb7343485212",
"manifest.json": "78aaf83923e4c4fb6d54308debd8841a",
"version.json": "3b259165d7b1a2d35f01d257dfbdee79"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
