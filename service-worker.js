if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),o={module:{uri:d},exports:s,require:n};i[d]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/10/11/吴恩达深度学习课程第一课/index.html",revision:"0811a86e1288bd2c05726f9d4e5d4480"},{url:"2023/10/11/吴恩达课程第二课/index.html",revision:"9fb0a46d387e9daec812d0a83f50da09"},{url:"2024/06/07/杨洁学姐嘻嘻/index.html",revision:"83e93d0545869ad46435ed64a23d8a56"},{url:"404.html",revision:"00703140f98a1b44981eb00bedc47153"},{url:"archives/2023/10/index.html",revision:"f87e9b76b918a5ad4b2b341288598cfe"},{url:"archives/2023/index.html",revision:"eaf101732bfc454a2587dd88d406b78b"},{url:"archives/2024/06/index.html",revision:"26eeb9dcfe28fa79ca13bf5e3d2ead1c"},{url:"archives/2024/index.html",revision:"9a926a4b7b1ef54a6db592c8f021d646"},{url:"archives/index.html",revision:"918ec0e6014e6e20a5c2422b7afe3b1b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"5622b829a4c6cf80d014335b81b453a0"},{url:"categories/吴恩达深度学习基础/index.html",revision:"68aeead1bf28d3ff5d88d74cf9314d89"},{url:"css/index.css",revision:"2542f82927ebcd08ef59cfebd2a4013f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pasted-0.png",revision:"894f34338a5aac3a311e17f1f363f165"},{url:"images/pasted-1.png",revision:"4f0fda4bcca3ad1dac24857237f31d96"},{url:"images/pasted-2.png",revision:"240de247062db8e2980df860e9ccfa37"},{url:"images/pasted-3.png",revision:"bbbcb82163cbc5f64546b4f021d27d0b"},{url:"images/pasted-4.png",revision:"bbbcb82163cbc5f64546b4f021d27d0b"},{url:"images/pasted-5.png",revision:"bbbcb82163cbc5f64546b4f021d27d0b"},{url:"images/pasted-6.png",revision:"43c0bab9b4ce541c2842ad42a1301521"},{url:"images/pasted-7.png",revision:"43c0bab9b4ce541c2842ad42a1301521"},{url:"images/pasted-8.png",revision:"43c0bab9b4ce541c2842ad42a1301521"},{url:"images/siteicon/android-chrome-144x144.png",revision:"ce7df6ae53ed32f2615d5ecb4c2acb7a"},{url:"images/siteicon/android-chrome-192x192.png",revision:"76e73ec19110ed7ee301114c7cc7c2b3"},{url:"images/siteicon/android-chrome-256x256.png",revision:"323ab03fa1fc7a6d19e9f76163fdf163"},{url:"images/siteicon/android-chrome-36x36.png",revision:"213e7c81abb34cee24ee1b27915ae32e"},{url:"images/siteicon/android-chrome-384x384.png",revision:"cd2ad2923e0d184e1eaded5d018cca83"},{url:"images/siteicon/android-chrome-48x48.png",revision:"014ed6840c181260f88cfe25fe5e7352"},{url:"images/siteicon/android-chrome-72x72.png",revision:"892f17c8a2d57673aa316a45070fd054"},{url:"images/siteicon/android-chrome-96x96.png",revision:"6078c3406ccc37505397a91acc478ea5"},{url:"images/siteicon/apple-touch-icon.png",revision:"e48b8a78df343e2b76d922bb85c485de"},{url:"images/siteicon/favicon-16x16.png",revision:"72dace32fbb82ed0b8750724e4d494f8"},{url:"images/siteicon/favicon-32x32.png",revision:"e69ec5c1a20a3c70f1b3f58c476f7b3b"},{url:"images/siteicon/mstile-150x150.png",revision:"5932a249ca57b8b8b7675c155916cd4a"},{url:"images/siteicon/README.html",revision:"bce3e38fc8dd582d2c220915b09a0112"},{url:"images/siteicon/safari-pinned-tab.svg",revision:"28aa616eb2e5358e988a269c6237492a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"38fedc6680988e5d4a85260f190a1e8c"},{url:"img/avatar.jpg",revision:"2207e33e0741d954511d0b8c05d9f1fa"},{url:"img/default_top_img.jpg",revision:"93cda9f66a90e713ac33a78ddda23414"},{url:"img/favicon.jpg",revision:"9fb034940870fa5ae1ca314b27508236"},{url:"img/favicon1.jpg",revision:"0d2946c93e0cac679e2b9397758d1093"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"e09c1b56729b8c5edc4edda2501e3ca9"},{url:"img/siteicon/android-chrome-144x144.png",revision:"ce7df6ae53ed32f2615d5ecb4c2acb7a"},{url:"img/siteicon/android-chrome-192x192.png",revision:"76e73ec19110ed7ee301114c7cc7c2b3"},{url:"img/siteicon/android-chrome-256x256.png",revision:"323ab03fa1fc7a6d19e9f76163fdf163"},{url:"img/siteicon/android-chrome-36x36.png",revision:"213e7c81abb34cee24ee1b27915ae32e"},{url:"img/siteicon/android-chrome-384x384.png",revision:"cd2ad2923e0d184e1eaded5d018cca83"},{url:"img/siteicon/android-chrome-48x48.png",revision:"014ed6840c181260f88cfe25fe5e7352"},{url:"img/siteicon/android-chrome-72x72.png",revision:"892f17c8a2d57673aa316a45070fd054"},{url:"img/siteicon/android-chrome-96x96.png",revision:"6078c3406ccc37505397a91acc478ea5"},{url:"img/siteicon/apple-touch-icon.png",revision:"e48b8a78df343e2b76d922bb85c485de"},{url:"img/siteicon/favicon-16x16.png",revision:"72dace32fbb82ed0b8750724e4d494f8"},{url:"img/siteicon/favicon-32x32.png",revision:"e69ec5c1a20a3c70f1b3f58c476f7b3b"},{url:"img/siteicon/mstile-150x150.png",revision:"5932a249ca57b8b8b7675c155916cd4a"},{url:"img/siteicon/README.html",revision:"62cd2485290f9fb18e5a1c53458c22f1"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"28aa616eb2e5358e988a269c6237492a"},{url:"img/wechat.jpg",revision:"b711875ae042cf567981cb4fd7bb864a"},{url:"index.html",revision:"ee9373d9d0842ec4de7b04bf092546e1"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"js/weather.js",revision:"923a5dc58c7698b53fbe66380e205218"},{url:"link/index.html",revision:"357c714cf4ce6ffbf708424c5799c67a"},{url:"messageboard/index.html",revision:"f68aaea7f2e19b863fb75b18e92ba1d3"},{url:"sw-register.js",revision:"0dd40093a8f697396ec29c0d29a9e1ea"},{url:"sw.js",revision:"382012ba5f1bc97536e24118babf1b9c"},{url:"tags/index.html",revision:"0dd5d1cdeb0092afb5c548f33ea266f4"},{url:"tags/吴恩达深度学习基础/index.html",revision:"87c180c86cb20cb971df965dbdb9ff47"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
