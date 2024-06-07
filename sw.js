/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/11/吴恩达深度学习课程第一课/index.html","0811a86e1288bd2c05726f9d4e5d4480"],["/2023/10/11/吴恩达课程第二课/index.html","9fb0a46d387e9daec812d0a83f50da09"],["/2024/06/07/杨洁学姐嘻嘻/index.html","83e93d0545869ad46435ed64a23d8a56"],["/404.html","00703140f98a1b44981eb00bedc47153"],["/archives/2023/10/index.html","f87e9b76b918a5ad4b2b341288598cfe"],["/archives/2023/index.html","eaf101732bfc454a2587dd88d406b78b"],["/archives/2024/06/index.html","26eeb9dcfe28fa79ca13bf5e3d2ead1c"],["/archives/2024/index.html","9a926a4b7b1ef54a6db592c8f021d646"],["/archives/index.html","918ec0e6014e6e20a5c2422b7afe3b1b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","5622b829a4c6cf80d014335b81b453a0"],["/categories/吴恩达深度学习基础/index.html","68aeead1bf28d3ff5d88d74cf9314d89"],["/css/index.css","2542f82927ebcd08ef59cfebd2a4013f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","894f34338a5aac3a311e17f1f363f165"],["/images/pasted-1.png","4f0fda4bcca3ad1dac24857237f31d96"],["/images/pasted-2.png","240de247062db8e2980df860e9ccfa37"],["/images/pasted-3.png","bbbcb82163cbc5f64546b4f021d27d0b"],["/images/pasted-4.png","bbbcb82163cbc5f64546b4f021d27d0b"],["/images/pasted-5.png","bbbcb82163cbc5f64546b4f021d27d0b"],["/images/pasted-6.png","43c0bab9b4ce541c2842ad42a1301521"],["/images/pasted-7.png","43c0bab9b4ce541c2842ad42a1301521"],["/images/pasted-8.png","43c0bab9b4ce541c2842ad42a1301521"],["/images/siteicon/README.html","bce3e38fc8dd582d2c220915b09a0112"],["/images/siteicon/android-chrome-144x144.png","ce7df6ae53ed32f2615d5ecb4c2acb7a"],["/images/siteicon/android-chrome-192x192.png","76e73ec19110ed7ee301114c7cc7c2b3"],["/images/siteicon/android-chrome-256x256.png","323ab03fa1fc7a6d19e9f76163fdf163"],["/images/siteicon/android-chrome-36x36.png","213e7c81abb34cee24ee1b27915ae32e"],["/images/siteicon/android-chrome-384x384.png","cd2ad2923e0d184e1eaded5d018cca83"],["/images/siteicon/android-chrome-48x48.png","014ed6840c181260f88cfe25fe5e7352"],["/images/siteicon/android-chrome-72x72.png","892f17c8a2d57673aa316a45070fd054"],["/images/siteicon/android-chrome-96x96.png","6078c3406ccc37505397a91acc478ea5"],["/images/siteicon/apple-touch-icon.png","e48b8a78df343e2b76d922bb85c485de"],["/images/siteicon/favicon-16x16.png","72dace32fbb82ed0b8750724e4d494f8"],["/images/siteicon/favicon-32x32.png","e69ec5c1a20a3c70f1b3f58c476f7b3b"],["/images/siteicon/mstile-150x150.png","5932a249ca57b8b8b7675c155916cd4a"],["/images/siteicon/safari-pinned-tab.svg","28aa616eb2e5358e988a269c6237492a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","38fedc6680988e5d4a85260f190a1e8c"],["/img/avatar.jpg","2207e33e0741d954511d0b8c05d9f1fa"],["/img/favicon.jpg","9fb034940870fa5ae1ca314b27508236"],["/img/favicon1.jpg","0d2946c93e0cac679e2b9397758d1093"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","e09c1b56729b8c5edc4edda2501e3ca9"],["/img/siteicon/README.html","62cd2485290f9fb18e5a1c53458c22f1"],["/img/siteicon/android-chrome-144x144.png","ce7df6ae53ed32f2615d5ecb4c2acb7a"],["/img/siteicon/android-chrome-192x192.png","76e73ec19110ed7ee301114c7cc7c2b3"],["/img/siteicon/android-chrome-256x256.png","323ab03fa1fc7a6d19e9f76163fdf163"],["/img/siteicon/android-chrome-36x36.png","213e7c81abb34cee24ee1b27915ae32e"],["/img/siteicon/android-chrome-384x384.png","cd2ad2923e0d184e1eaded5d018cca83"],["/img/siteicon/android-chrome-48x48.png","014ed6840c181260f88cfe25fe5e7352"],["/img/siteicon/android-chrome-72x72.png","892f17c8a2d57673aa316a45070fd054"],["/img/siteicon/android-chrome-96x96.png","6078c3406ccc37505397a91acc478ea5"],["/img/siteicon/apple-touch-icon.png","e48b8a78df343e2b76d922bb85c485de"],["/img/siteicon/favicon-16x16.png","72dace32fbb82ed0b8750724e4d494f8"],["/img/siteicon/favicon-32x32.png","e69ec5c1a20a3c70f1b3f58c476f7b3b"],["/img/siteicon/mstile-150x150.png","5932a249ca57b8b8b7675c155916cd4a"],["/img/siteicon/safari-pinned-tab.svg","28aa616eb2e5358e988a269c6237492a"],["/img/wechat.jpg","b711875ae042cf567981cb4fd7bb864a"],["/index.html","81dd5eb42a54e44fe4d3a73d765758f1"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/js/weather.js","923a5dc58c7698b53fbe66380e205218"],["/link/index.html","357c714cf4ce6ffbf708424c5799c67a"],["/messageboard/index.html","f68aaea7f2e19b863fb75b18e92ba1d3"],["/service-worker.js","697eaa7c4be47f5c4ef2f0c86a06b2c3"],["/sw-register.js","0dd40093a8f697396ec29c0d29a9e1ea"],["/tags/index.html","0dd5d1cdeb0092afb5c548f33ea266f4"],["/tags/吴恩达深度学习基础/index.html","87c180c86cb20cb971df965dbdb9ff47"],["/workbox-c2bc8b5b.js","e9715bbc70f17db631cad5260e401a95"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
