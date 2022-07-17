'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "28336ecc5da4f6fd682e0c4f97d92b9d",
"assets/assets/17e41391fa26652b7c7158f6156e8502.jpg": "cd747a4f6b1127ac6e15a67e26e6f63e",
"assets/assets/24.png": "2d9636750ee5c4973698770222e4715c",
"assets/assets/attachment_115080175.jpg": "7632ee9fe4237f4fd6ee9f491419a46d",
"assets/assets/barber-shop-_151212203429-563.jpg": "25e3bad6a250a397e6242733b46106e0",
"assets/assets/barbershop-cover.jpg": "731ecad4beb515041016acff795d4cf9",
"assets/assets/barbershop-logo_95982-25.jpg": "87e81b96cccb20b9ec8929f73366a894",
"assets/assets/barbershop-medan-840x450.jpg": "ef61ca4bd9b8e1f1475320b55f5dce12",
"assets/assets/download.png": "2f1eb2944d547c03cd9aa427abed805d",
"assets/assets/haircut.svg": "a565ae2524eec6c8b6d2230a3c47d507",
"assets/assets/img-1639.jpg": "50596d95a9a8ca741071045f4dedc6d3",
"assets/assets/Instellar.jpg": "755c467e07a9f14b687a8f858ae5c069",
"assets/assets/palor.svg": "b9477617de52ed50bbbca0a26d3c2c9c",
"assets/assets/Pangkas_barbershop_Itjeher_cipete00017.jpg": "597d7c71ac2d92d9de077d353ceedbf9",
"assets/assets/saloon.svg": "39e5993b3b9f6877f0fc360e95ce35ed",
"assets/assets/shampoo.svg": "074f09541179f49c34aa87e110a3d4f7",
"assets/assets/spa.svg": "9d6198ab7954bcabd3c0767634aaae70",
"assets/FontManifest.json": "81bcb312bcca340fddbd2d627d485a84",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/adjust.png": "280f39d31d10c1cb1b687015c42dccfd",
"assets/images/beautymaster_logo.png": "3e268ed88766edfdb7968e0f481c57c9",
"assets/images/calendar.png": "768c3b648bd41c87922777e8c6403ef4",
"assets/images/calendar_selected.png": "e38778a944a42c4a496eb28c2248077d",
"assets/images/chat.png": "95b21c1af018d867796c77a68dd52f78",
"assets/images/chat_selected.png": "ab5f9b0df1b33cf2799fcdd71e7926ca",
"assets/images/check.png": "7a893ff448740c53fcf6f2aee1d17150",
"assets/images/face_one.png": "3a958ce22573cdffe8ecfa0d9f6c925b",
"assets/images/face_three.png": "b07a0c1aa2339ca0bf654982d62c8e8a",
"assets/images/face_two.jpg": "7c20e43fbfcdd303beaeffd62f530803",
"assets/images/google_logo.png": "351276465dc1b41206940a3ecd63487c",
"assets/images/home.png": "d78002e84b0c8a628aff645516aa84dc",
"assets/images/house.png": "10d1cce28caca2ac818887044ab42054",
"assets/images/ic_apple.png": "63c28b851393924a9c059380578933c4",
"assets/images/ic_facebook.svg": "cc8acb595621d300c7e5874ea0a49455",
"assets/images/ic_twitter.svg": "8664c5f99b181ac0812217adba159324",
"assets/images/magnifier.png": "285cd3e10130b8063f0f5906989936ed",
"assets/images/makeup.png": "54a0c77c45cd10ee002bdcc43e2fe0d0",
"assets/images/makeup_kit.png": "cc5c67c4a7ee1ac206d7b5d4c1906abe",
"assets/images/map.png": "8e0477abe52e65ed89131a43bb0ce584",
"assets/images/model_one.jpg": "54a39050772795cc85ab5b2f2c4d1324",
"assets/images/model_three.jpg": "784e507395948846bc061626d8cdfb61",
"assets/images/model_two.jpg": "73c45d17bb86f0a62b8a53f085b83370",
"assets/images/more.png": "f6bc1fda3ce3919f5f23797fe002d670",
"assets/images/more_selected.png": "74a2ede3e50c4c9203f1336fe92afef3",
"assets/images/nail-polish.png": "53f113c561c99fac8874236f1a154465",
"assets/images/no-connection.png": "1bbfd808a46b2937768787932bf64c1b",
"assets/images/notification.png": "04ebed85f4361fc19e391b5fe04146b0",
"assets/images/product_one.jpg": "88118b1ead501bcd5348a5787335b8be",
"assets/images/product_three.jpg": "80dd9eb11726047ea88a56ce8dd56c53",
"assets/images/product_two.png": "16c13ba8b91cc5c0848d9d8a9549794f",
"assets/images/salon.png": "3cfd633ea9aad081946b9c6d56141a94",
"assets/images/salon_four.jpg": "87ae82af89028cea4a71c2362fd66ef8",
"assets/images/salon_one.jpg": "74544b4a276326888dcd5edec12278d6",
"assets/images/salon_three.jpg": "1c26b586c1fec0d58b6688e790a2bbc7",
"assets/images/salon_two.jpg": "4abc971e120da99243b62a48f24b2a1b",
"assets/images/search.png": "0b44047324108adee761ed3f51e9d807",
"assets/images/session_expired.png": "a22aeed6cf3787129354578e234a5700",
"assets/images/something_went_wrong.webp": "5fac2548c75d2cf33eb9c94a50dcc51f",
"assets/images/spa.jpg": "42b197249995554b6e553621183ce111",
"assets/images/welcome.png": "efdd3816e7f78f5c1b0b3c6c03677111",
"assets/images/x.png": "c724a4e6c37f5a837cfd93c212de0bc2",
"assets/NOTICES": "4a5aff70a7586a14ccd57a8b4ce32039",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/gender_picker/assets/images/female.png": "93c67e67ee8656ee2f13b917a815ec0a",
"assets/packages/gender_picker/assets/images/male.png": "b544146a8e95908f097fe86343f9140b",
"assets/packages/gender_picker/assets/images/other.png": "4b5edfe11e630dbd98a09e04b2e35269",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2f2ab1bacc810e98b70687ac3095d08",
"/": "d2f2ab1bacc810e98b70687ac3095d08",
"main.dart.js": "cb3fc09b74ffae75280f0fa8ce7e5ba3",
"manifest.json": "2f466470c29b29ca345fecde0f3db739",
"version.json": "9753ae818cebdabd58dc3c129ba85299"
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
