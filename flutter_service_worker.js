'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dc33893ccfb682a8371698d02f732412",
"manifest.json": "877ad4a0735e65fd49c145ffb5a5c692",
"flutter_bootstrap.js": "b0657a5d664aa7141cb27a032a105e54",
"assets/assets/logo.png": "6e612c1794ee37aa9938025b0805792f",
"assets/assets/logo_foreground.png": "8bd4c71b0e32f2532944090f99e83289",
"assets/assets/icons/ic_card.png": "01898403fd14f5e7cb8fb05c8ba7d331",
"assets/assets/icons/ic_report.png": "1a16ac949ecda20e48b0b4f9e62bc5d6",
"assets/assets/icons/ic_default.png": "eb1f3b485d24ed06df04f8598b692883",
"assets/assets/icons/ic_.png": "5223a0a5fd731d5e6b9b31bdd059fd84",
"assets/assets/icons/ic_whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/icons/ic_delete.png": "c284a4c63eb46463522c2906f2c6e3b3",
"assets/assets/icons/menu1.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/menu3.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/ic_whatsApp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/icons/menu5.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/ic_test.png": "4118000663b1d4c2cd80a96886983ef5",
"assets/assets/icons/menu2.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/ic_settings.png": "d6b2049fae1df5d6aa1663917fc5fc14",
"assets/assets/icons/menu4.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/ic_menu.png": "83a3785e188d04f77b8d538066dca2d8",
"assets/assets/icons/ic_world.png": "cdf95b427f17016536cb57f5b727ddde",
"assets/assets/icons/ic_phone.png": "a9b7914c08af428be1a18b1d12841cac",
"assets/assets/icons/ic_multiple_person.png": "644e0bc5b2b781b2323130a88aabd447",
"assets/assets/icons/default.png": "eb1f3b485d24ed06df04f8598b692883",
"assets/assets/icons/ic_cancel.png": "84b4c1c94ea89183a95cacfbce56c147",
"assets/assets/icons/archiveEmpty.png": "88ed1b53e270b81338c9028f4d4e24b3",
"assets/assets/icons/ic_360.png": "0a7251bcbf985f028018cca528933960",
"assets/assets/icons/ic_cart.png": "55ff4394491b5d25339a090a32f4ca54",
"assets/assets/icons/ic_notification.png": "021266d36ceda8c0c2073f5a2218c7ea",
"assets/assets/splash.png": "8a69fc5cf898708917b219921915a272",
"assets/assets/onboarding/7.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/5.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/1.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/4.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/2.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/6.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/onboarding/3.png": "8c4abd219fda75f6e654de3f36899174",
"assets/assets/fonts/Outfit-Regular.ttf": "9ec625cbeb0f09f9c5760a9b466d7f4a",
"assets/assets/fonts/Plus-Jakarta-Sans.ttf": "2f5e58f99464aa2582e5ce6f75aff5f3",
"assets/assets/fonts/Outfit-SemiBold.ttf": "595dbdbab130e5439ed2346ed3774fce",
"assets/assets/fonts/CustomIcons.ttf": "6d77b21c82c20fc7c6e3a6a87c2d65d9",
"assets/assets/fonts/CustomIcons2.ttf": "10051da7d74de6b560b3fad6df235ced",
"assets/assets/fonts/Outfit-Light.ttf": "27212e06dac07ed07174fd25097bd8ac",
"assets/assets/fonts/Plus-Jakarta-Sans-Italic.ttf": "0cb1d534def2f4ea33460024eb99b6e1",
"assets/assets/images/bg.png": "2ae54d5ec90263833099d1ed92d90880",
"assets/assets/images/not_found.png": "4cde72c02bbd5c37ca8e470944317c90",
"assets/assets/images/icon2.png": "54a452819c7853007ddb0ee50857e81e",
"assets/assets/images/splash.png": "8a69fc5cf898708917b219921915a272",
"assets/assets/images/icon.png": "9956846de910d4a180c5722d9b12a6a4",
"assets/assets/images/ic_icon_login.png": "8cbd4ab2f6542ae45f1c81dd0cb4bb33",
"assets/assets/images/ic_avatar.png": "8c7ad7b55400988bce56ef713be457b1",
"assets/assets/images/ic_icon_horizontal.png": "e645fb09492d447747b7f2c5fa1fcc65",
"assets/assets/images/cod_(1).png": "00f192087fc950ef146feae5b733382d",
"assets/assets/images/ic_categories.png": "fe0c80da19cc076a733e10a569e8f520",
"assets/assets/images/Boleta_Ejemplo.jpg": "36310da2b28b8b76222ca6a5e545532e",
"assets/assets/images/ic_icon_into.png": "54a452819c7853007ddb0ee50857e81e",
"assets/assets/images/banner.png": "42086551b40ff806a2ac9216c11c14f3",
"assets/assets/images/icon_trans.png": "54a452819c7853007ddb0ee50857e81e",
"assets/assets/images/cod.png": "54a452819c7853007ddb0ee50857e81e",
"assets/assets/images/ic_avatar2.png": "223e351b608dab6486ce267697d7fe57",
"assets/AssetManifest.json": "08a27ab8f32cc29d3fcf624432185d30",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "4553b20cdb3a167bad536405818c822c",
"assets/NOTICES": "dfc62ef4aeda91a2c66c27b98269cc4a",
"assets/AssetManifest.bin.json": "4c92fa3ba80679b5260ce5e3d329f9f4",
"assets/AssetManifest.bin": "ad712ac8635e3d3d9eead440853792bd",
"assets/FontManifest.json": "a9e9bca9012472291f87e1bbf08931b8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "88eee252fe867b3c896489adf082ce26",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "620787cf6ff73bfec39fcee670ec0ca7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"icons/Icon-512.png": "cd00d2a412d8cedd8638702132289938",
"icons/Icon-192.png": "3f8ffd038fc36cece3c832099cecd7d0",
"icons/Icon-maskable-512.png": "cd00d2a412d8cedd8638702132289938",
"icons/Icon-maskable-192.png": "3f8ffd038fc36cece3c832099cecd7d0",
"favicon.png": "1f33d30caf69f518510fdd579580fa8a",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "809c527a77d590ed3200caa73dc7a8ab",
"/": "809c527a77d590ed3200caa73dc7a8ab",
"main.dart.js": "a88858a2be20658dd176d8745e039e9b"};
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
