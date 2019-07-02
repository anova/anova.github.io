---
layout: post
title: "Progressive Web Applications Eğitimleri"
categories: pwa
---

## Building Progressive Web Apps Kitabı

[Building Progressive Web Apps](https://learning.oreilly.com/library/view/building-progressive-web/9781491961643/)

### Önsöz

Kitabın önsözünde PWA için kitabın içerdiği bilgiler şunlardır yazıyor:

* Sitenin yavaş bağlantılarda ve offline da bile çok hızlı yüklenmesi (offline cache)
* Kullanıcının ana ekranına eklenme (add to home screen)
* Kullanıcıya bildirim gönderebilmek (notifications)

### Bölüm 1 - Progressive Web Uygulamaları Tanıtımı

Bir site PWA olarak çalışırken, offline olarak da erişilip kullanıcı daha önceden ziyaret ettiği sayfayı / veriyi görebilir. (Asansörde, metroda ve benzeri) Bunu bir tren şirketi üzerinden örneklemiş. Kullanıcı siteyi ana ekranına ekleyip ve bildirimlere izin verip trenlerin yaptığı rötarları siteyi kapatsa bile öğrenebilir.

Kullanıcıya bu avantajları sunmak için uygulama geliştirmek hem maliyetlidir, hem de kullanıcı için daha zahmetlidir. Kullanıcı şöyle bir huniden geçmek zorundadır:

1. Sitenizi online reklamlardan bulmaları gerekir
2. Uygulama marketindeki uygulama sayfanızı bulmaları gerekir
3. Uygulama marketinde kurulum butonuna basmaları ve
4. Uygulamanın gerektirdiği izinleri vermeleri gerekir
5. Uygulamanın indirilmesini ve kurulmasını beklemeleri
6. En sonunda kurulmuş uygulamayı açmaları

Bu huninin her bir aşamasında, kullanıcı kaybolabilir veya işlemi yapmaktan vazgeçebilir.

PWA zaten erişilebilir olmasıyla (arama motorundan sitenize gelen mobil ziyaretçi, sitenizi uygulama olarak kurmasa bile erişmiş olur) ve kolay kurulumuyla uygulamalardan daha öne çıkar.

Bazı siteler uygulamanın bu dezavantajını gidermek için sitelerine tam ekran olarak uygulama için bir banner eklerler. Ben buna "kullanıcının yüzüne kapıyı kapatmak" diyorum. Zaten aradığım bilgi sitende var, aynı bilgiyi görmek için beni neden uygulamaya yönlendiriyorsun? Hiç kullanıcı dostu değil.

Native uygulamaların sitelerde tam ekran banner olarak çıkmasının sebebi, kullanıcının kolay erişebilmesi (artık chrome dan sitenin ismini yazmak yerine telefonunda bir ikona dokunacak) ve kullanıcıya gerekli olduğunda bildirim gönderebilmesi denilebilir. PWA ile bu avantajları native uygulamalar olmadan sitemize ekleyebiliriz.

#### Progressive Web Uygulamalarının Avantajları

**Bağlantıdan bağımsız olarak erişilebilme**

PWA lar, kullanıcının ağ bağlantısındaki değişimlere klasik web sitelerine göre daha uygun yanıtlar verebilirler. Bunu yaparken `Service Worker` denilen bir yapıyı kullanırlar.

Kullanıcılar, PWA nızı kullanırken offline durumda bile bir işlem yapabilirler, bu durumda işlem kullanıcı online duruma gelir gelmez iletilir. Online duruma geldiğinde işlemin iletilmesi için uygulamanın açık olması da gerekmez.

**Hızlı yüklenme**

Service Worker sayesinde siteniz / uygulamanız anında yüklenir. Bunu `offline first` yaklaşımıyla yapar. Yüklenme hızınız native uygulamaları bile geçebilir.

**Push notifications**

Kullanıcılara, sitenizi ziyaret ettikten çok sonra bile bir bildirim gönderebilirsiniz.

**Ana ekrana eklenme**

Bir kullanıcı PWA ya ilgi gösterdiğinde tarayıcı otomatik olarak kullanıcıya ana ekrana ekleme önerisi çıkartabilir. Böylece uygulamanıza çok daha rahat erişim sağlanır.

**Uygulama benzeri görünüm**

Bu şekilde ana ekrana eklenen bir sitenin işleyişi native uygulamalara çok benzerdir. (İkonu, adres çubuğunun görünmeyişi, sayfalar arası geçişte yüklenme barı vb.)

Açılırken açılış ekranı (splash screen) gösterebilirler, hatta kendilerini belli bir yöne (dikey veya yatay) kilitleyebilirler. (Bu özellik oyunlar için çok kullanışlıdır.)

#### Sekme, İnternet ve Service Worker

Not: Burada başlık "İyi Kötü ve Çirkin" gibi hepsinin başına "the" getirilip verilmiş. (The Good, The Bad and The Ugly) (The Tab, The Web and the Service Worker)

Service Worker, tüm Progresif Web Uygulamalarının kalbinde yer alır.

Service Worker konsepti ortaya çıkmadan önce kodlarımız ya istemcide ya da sunucuda çalışırdı. Service Worker bize yeni bir katmanla daha tanıştırdı.

Bir Service Worker, sitenize ait bütün tablarda ortak olarak çalışabilir. Siteniz için bir kez kaydedildiğinde siteniz ve sunucu arasındaki trafiği yönetir. Sunucu ulaşılamaz olsa bile service worker size bir şeyler sunabilir.

Hatta daha da fazlası, siz tarayıcıyı veya kaydedilmiş PWA nızı kapattığınızda, sunucu tarafı size service worker yoluyla ulaşabilir.

Service Workerların en büyük avantajları basit JavaScript dosyaları olmalarıdır. Alıştığınız, bildiğiniz şekilde bir service worker yazmaya başlayabilirsiniz.

Bir geliştirici olarak service worker yapısını öğrenmenin size katacağı şeyler muazzamdır. HTML, CSS ve JavaScript bilginizle native uygulamaları geride bırakan deneyimleri bu sayede yaratabilirsiniz.

### Bölüm 2 - İlk Service Worker ınız

Kitap uygulamalı bir anlatım metodunu benimsemiş. Bir github repository var. Onu kendimize klonlayıp, bölüm bölüm anlatılan konuları uygulayıp kodu geliştireceğiz. Her bölüm sonunda çalışan bir web uygulamamız olacak ve kitabın sonunda da tam bir PWA geliştirmiş olacağız.

Kodları git ile indirmek için:

```
git clone -b ch02-start git@github.com:TalAter/gotham_imperial_hotel.git
cd gotham_imperial_hotel
npm install
```

Bu kodları indirdikten sonra `npm start` komutu vererek kodu çalıştırıyoruz.

Çalışan uygulamayı tarayıcıdan `http://localhost:8443` adresinden görebiliyoruz.

Böyle bir uygulamanın seçilmesinin sebebi, klasik web sitelerinin nasıl PWA haline getirildiğini örneklemek içindir.

#### Kodun yapısı

Kod iki önemli ana klasör içerir:

`public` klasörü tüm client side kodları tutar. resimler ve stiller de bu klasörde bulunur.

`server` klasörü tüm sunucu taraflı işlemleri yapar, rezervasyonları takip eder ve bildirimleri (notifications) gönderir.

#### İlk offline deneyim

Bu siteye herhangi bir service worker eklemediğimiz durumda offline olduğumuzda (npm start ile başlattığımız serverı durdurduğumuzda veya chrome devtools dan offline moda geçtiğimizde) chrome un standart offline iken çıkan dinozorunu görürüz.

#### İlk Service Worker

Uygulama kodumuzun en üstüne şu satırları yazalım:

```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
    .then(function(registration) {
        console.log("Service Worker registered with scope:", registration.scope);
    }).catch(function(err) {
        console.log("Service worker registration failed:", err);
    });
}
```

Kod, tarayıcının Service Worker desteği olup olmadığını kontrol ederek başlıyor. Sonra Service Worker kayıt eden `navigator.serviceWorker.register` metodunu çağırıyor. Bu metot iki parametre alır. İlk parametresi Service Worker scriptinin adresidir. İkinci parametre opsiyoneldir. Bu örnekte kullanılmamıştır. İleride "Service Worker Kapsamı" (Service Worker Scope) konusunu işlerken değineceğiz.

Service Worker kodlarını çalıştırmadan önce desteklenip desteklenmediğini kontrol etmek "Progressive Enhancement" ilkesi gereğidir. Böylece kodlarımız Service Worker desteklemeyen eski tarayıcılarda sessizce atlanır, hata vermez.

`register` metodu bir *promise* döndürür. Eğer *promise* başarılı bir şekide çalışırsa `then` içinde yazılan kod bloğu, başarısızlığa uğrarsa `catch` içine yazılan kod bloğu işletilir.

İlk denememiz başarısız olacak ve catch içindeki kod çalışacaktır. Çünkü henüz register metodu içindeki serviceworker.js dosyasını oluşturmadık.

Bu hatayı gidermek için kök klasörümüzde (bizim örneğimizde /public klasörü) içi boş bir `serviceworker.js` dosyası oluşturalım. İçi boş bir script dosyası olmasına rağmen bu geçerli bir service worker olarak kayıt edilecektir.

> **Dikkat:** serviceworker.js dosyası bir javascript dosyası olduğu için onu /js klasörüne almamalıyız. Service worker dosyaları daima içinde bulunduğu klasörleri ve alt klasörleri kapsarlar. Bunu ileride "Service Worker Scope" (Service Worker Kapsamı) adı altında göreceğiz.

Şimdi serviceworker.js dosyasında neler yapabileceğimize bir bakalım. Aşağıdaki kodu serviceworker.js dosyanıza ekleyin:

```javascript
self.addEventListener("fetch", function(event) {
    console.log("Fetch request for:", event.request.url);
});
```

Bu kod service worker a `fetch` olayını ekler. serviceworker.js içindeki `self` ifadesi service worker'ın kendisini temsil ediyor.

Sayfayı yenilediğinizde yapılan her request in console.log ile yazdırıldığını göreceksiniz. (Eğer konsolda bir şey göremiyorsanız, bu bir önceki içi boş serviceworker.js in halen devrede olduğunu gösterir. Bu durumla ilgili "Service Worker Lifecycle - Service Worker Yaşam Döngüsü" ne bakalım.)

#### **Service Worker Lifecycle - Service Worker Yaşam Döngüsü**

Service worker üzerinde değişiklik yaptığınızda yaptığınız değişikliklerin tarayıcıyı yenilediğinizde hemen yayına girmediğini farketmişsinizdir. Bunun sebebi önceki service worker ın halen aktif olmasıdır. Yeni service worker "waiting" durumunda devreye girmek için beklemektedir. Eskisi kontrolü bıraktığında service worker'ın yeni versiyonu devreye girecektir.

Bu durum bir zorluk olarak görülebilir, aslında service worker çalışmasının güçlü özelliklerinden biridir. Bu özelliğe 4. Bölümde değineceğiz.

Şimdilik kolay geliştirebilmek ve oluşturduğumuz service worker yeni versiyonlarını hemen görebilmek için, Chrome Developer Tools'da Application sekmesinde Service Worker kısmında "Update on reload" ı işaretleyebiliriz. Böylece yeni versiyon geldiğinde sayfa yenilenir yenilenmez devreye girer.

```javascript
self.addEventListener("fetch", function(event) {
  if (event.request.url.includes("bootstrap.min.css")) {
    event.respondWith(
      new Response(
        ".hotel-slogan {background: green!important;} nav {display:none}",
        { headers: { "Content-Type": "text/css" }}
      )
    );
  }
});
```

Buradaki kod, gelen bir requestin içinde geçen bir ifadeye göre o dosyayı getirmek yerine, bizim o anda javascript ile oluşturduğumuz bir css yanıtı gönderiyor.

#### Progressive Enhancement

Bu kısımda detaylı anlatmış, burayı atlıyorum. Progressive Enhancement kısaca bir özellik için kod yazmadan önce o özelliğin varlığını denetleyip, desteklemeyen cihazlarda herhangi bir şey yapmamak diyebiliriz. Geolocation (Coğrafi konum öğrenme), SpeechRecognition (Ses tanıma), Web kamerasına erişme gibi kodlar hep progressive enhancement olarak yazılmalı. Kullanıcı bu özelliğe sahip olmayabilir veya bize bunu kullanmak için izin vermeyebilir. Bu durumda da kodumuz çalışmalı, ek özellikler üzerine eklene eklene gitmeli.

#### HTTPS gerekliliği

Bir Service Worker sunucu ile kullanıcı arasındaki ağ trafiğini izleyebilir ve değiştirebilir. Bu yüzden kullanımına HTTPS kullanım şartı getirilmiştir. Geliştirme sırasında "localhost" üzerinden https olmadan service worker testlerinizi yapabilirsiniz. (Https kullanmanın başka avantajlarını da sayıyor. Google indekslerinde öncelik, ses tanıma ve konum apilerinin sadece https ile çalışması gibi)

#### Bir içeriği webden çekmek (fetch)

Bir önceki örnekte, belli bir içerik yerine sıfırdan bir Response oluşturup gönderdik. İstersek belli bir dosya yerine başka bir dosyanın gelmesini sağlayabiliriz. Bunun için fetch API kullanmamız gerekir.

```javascript
self.addEventListener("fetch", function(event) {
  if (event.request.url.includes("/img/logo.png")) {
    event.respondWith(
      fetch("/img/logo-flipped.png")
    );
  }
});
```

Burada img/logo.png talep edilirken, service worker ağ trafiğinde araya girip o resim yerine başkasını gönderiyor.

`fetch(request[, options]);`

fetch ilk parametresi zorunludur. Girilebilecek değerler: sabit bir url veya `event.request.url` (o anki talebin urlsi) veya `event.request` (o anki talep nesnesinin kendisi)
Yanıt olarak bir promise döndürür o promise içinde bir Response nesnesi olur.

#### Offline durumları yakalamak ve bir hata mesajı göstermek

Şimdiye kadar öğrendiklerimizi kullanarak kullanıcı offline iken ona özel bir hata mesajı verelim. Önce basitçe aldığı requesti olduğu gibi ileten bir serviceworker.js ile başlayalım.

```javascript
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request)
  );
});
```

Bu kod, aldığı isteği olduğu gibi döndürüyor. Bu anlamsız gelebilir, ancak fetch in bir promise döndürdüğünü hatırlayalım. Bu başarısız olduğunda başarısızlık durumunu `catch` ile yakalayıp o duruma uygun bir yanıt döndürebileceğimiz anlamına geliyor.

```javascript
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(
      "Welcome to the Gotham Imperial Hotel.\n"+
      "There seems to be a problem with your connection.\n"+
      "We look forward to telling you about our hotel as soon as you go online."
      );
    })
  );
});
```

Burada yanıtı text olarak gönderdik. Eğer yanıtı html olarak göndermek istersek Response nesnesini oluştururken `new Response('içerik', { headers: {"Content-Type": "text/html"} })` şeklinde çağırabiliriz.

**EKLEME**
Kitaptaki örneği Türkçe karakterlerle denerken Content-Type yanına `charset=utf-8` ekledik.

```javascript
self.addEventListener('fetch', function(event){
    event.respondWith(
        fetch(event.request.url).catch(function(){
            return new Response('İnternet bağlantınız kesilmiş. Lütfen internete bağlantıktan sonra tekrar deneyiniz.', {
                headers: {
                    "Content-Type": "text/html; charset=utf-8"
                }
            });
        })
    );
});
```

#### Service Worker Scope - Service Worker Kapsamı

Service worker varsayılan olarak bulunduğu klasörü ve alt klasörleri kapsar, ancak register işlemi sırasında ikinci parametreyle kapsamını sınırlandırabiliriz.

```javascript
// These two commands will have the exact same scope:
navigator.serviceWorker.register("/sw.js");
navigator.serviceWorker.register("/sw.js", {scope: "/"});

// These two commands will register two service workers
// each controlling a different directory:
navigator.serviceWorker.register("/sw-ginnos.js", {scope: "/Ginnos"});
navigator.serviceWorker.register("/sw-ralphs.js", {scope: "/Ralphs"});
```

### Bölüm 3 - CacheStorage API

İkinci bölümde çok güzel bir şey yaptık. Kullanıcının internet bağlantısı kesildiğinde tarayıcının hata mesajı yerine bizim belirlediğimiz bir hata mesajını gördü. Ama bu yeterince tatmin edici değil. Bizim markamıza ait bir imaj, renk ve yazı stili olmadan düz bir html gösterdik. Şimdi amacımız offline olunduğunda gösterilecek olan durumu html, css ve imajlarıyla birlikte göstermektir. Bunun için `index-offline.html` adlı bir dosyayı kullanacağız.

Bunu yapmak için, kullanıcının isteğini alıp, eğer istek başarısız oluyorsa `index-offline.html` adlı dosyayı gösteririz.

```javascript
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return fetch("/index-offline.html");
    })
  );
});
```

Buradaki kodda mantık hatası vardır. Zaten offline olan kullanıcı nasıl index-offline.html dosyasını networkden talep edecek? Kullanıcı online iken, index-offline.html dosyası "bir yerlere" kaydedilip, offline iken oradan çekilip gösterilmeli. Neyse ki, service worker ile birlikte CacheStorage API ile offline iken kullanabileceğimiz cache olanağı da tarayıcıda geliyor.

#### CacheStorage nedir, ne değildir?

CacheStorage tamamen sizin kontrolünüzde olan yeni bir cache yapısıdır.

Ne değildir? Tarayıcı önbeleği değildir. Tarayıcı önbeleği CacheStorage dan bağımsız çalışmaya devam eder hatta siz CacheStorage dan değil de ağdan bir kaynağı talep ettiğinizde CacheStorage, öncelikle tarayıcı cache ine bakacaktır.

Tarayıcı cache i, ancak sunucudan gönderilen HTTP üstbilgileri (HTTP Headers) ile yönetilebiliyor.

Ne değildir? Eskimiş bir API olan AppCache ile aynı şey değildir. AppCache, sitedeki hangi dosyaların önbelleğe alınacağını ve offline iken çalışacağını manifest dosyasına bakarak anlayan eski bir yöntemdir. Web standartlarından kaldırılmıştır. (Genel olarak sevilmeyen, hatalı bir yapıdır. [Application Cache is a douchebag - Jake Archibald](https://alistapart.com/article/application-cache-is-a-douchebag/) )

CacheStorage ile şunları yapabiliriz:

1. Öğelerin ne zaman cache'e ekleneceğini seçebiliriz.
2. Öğelerin ne zaman cache'den silineceğini seçebiliriz.
3. Hangi öğelerin cache'den hangi öğelerin ağdan çekileceğini belirleyebiliriz.

#### Öğeleri ne zaman cache'e eklemeliyiz?

Bir service worker'ın üç aşaması vardır. Önce kurulumu, sonra aktif edilme aşaması geçilir ve en sonunda aktif hale gelir. Basitçe gösterirsek:

```
+------------+        +------------+        +-----------+
| Installing | -----> | Activating | -----> | Activated |
+------------+        +------------+        +-----------+
```

Şimdiye kadar Service Worker içinde sadece fetch olayını kullandık. Bu aktif bir service worker gerektiriyor.

Service Worker yaşam döngüsü içinde daha erken gerçekleşen başka bir olayda cache işlemini yapmalıyız. Bu iş için `install` olayını kullanabiliriz. Hatta burada hata olursa bu olayın içinde yeni Service Worker versiyonunun kurulumunu iptal de edebiliriz. Önbelleğe alınacak dosyaları service worker'ın bir bağımlılığı (dependency) olarak yazarsak, yeni service worker ımız aktif olduğunda gönül rahatlığıyla cache e atılan dosyaları önbellekten çağırabiliriz. (Çünkü bu dosyaların önbelleğe yazılmasını service worker ın kurulumu için ön şart yaptık)

#### Öğeleri CacheStorage'a eklemek

`serviceworker.js` dosyasını temizleyelim ve içine şunları yazalım:

```javascript
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("gih-cache").then(function(cache) {
      return cache.add("/index-offline.html");
    })
  );
});
```

Burada daha önce görmediğimiz komutlar var. Tek tek açıklayalım.

1. `install` olayı. Bu olay yeni bir Service Worker kayıt edildiği zaman kurulum aşamasında tetiklenir. (Not: serviceworker.js üzerinde değişiklik algılanırsa otomatik olarak yeni versiyonun geldiğini tarayıcı algılıyor, ve kayıt ediyor.)
2. `event.waitUntil` install olayı içinde gerçekleşmesini istediğimiz işlemleri buraya yazıyoruz. "Bu işlemler gerçekleşmeden devam etme" şeklinde ifade edebiliriz.
3. `caches.open` metodu eğer parametre olarak aldığı isimde bir cache varsa, onu açar. Eğer yoksa o isimde bir cache oluşturur ve bir promise ile sarmalayıp döndürür.
4. `cache.add` parametre olarak aldığı dosya yolunu cache e ekler. Eklerken "key" olarak da parametreyi kullanır.

> Not: Burada dosyanın Content-Type ı cache yazılırken veya okunurken belirtilmiyor çünkü CacheStorage dosyaları (veya kaynakları diyelim) header bilgileriyle birlikte saklar ve getirir.

Yalancı kod (Pseduo code) ile yazacak olursak süreç şöyle işler:
```
Yeni bir Service Worker kurulmadan önce
Bu işlemlerin tamamlandığına emin ol:
  Başarılı olarak bir cache açmalıyız
    VE
    Başarılı olarak bir dosyayı çekmeli
    VE
    Cache içine eklemeliyiz
  Bu adımlardan biri bile başarısız olursa
  İşlem başarısızdır, Yeni SW yi kurmaktan vazgeç
```

#### CacheStorage dan öğeleri almak

`install` olayından sonra serviceworker.js dosyasına aşağıdaki kodu ekleyin:

```javascript
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("/index-offline.html");
    })
  );
});
```

> CacheStorage güvenlik nedeniyle "Same-origin policy" kullanır. Bir dosyayı ancak aynı origin (aynı domain/subdomain) den gelmişse cache den çekebilirsiniz.

#### `match(request [,options])`

`match` metodu parametre olarak bir request alır ve geriye o request için cache den aldığı nesneyi döndürür.

İki şekilde çağrılabilir. Tüm cache ler içinde arama yapabilir veya belirli bir cache ismi içinde request i arayabilir.

```javascript
// request için tüm cache ler içinde eşleşme arar.
caches.match("logo.png");

// Belli bir cache içinde request için eşleşme arar.
caches.open("my-cache").then(function(cache) {
  return cache.match("logo.png");
});
```

match metodunun ilk parametresi istekte bulunulan kaynaktır (request) bunun cache e eklenen ile eşleşmesi gerekir. (cache e hangi isimde koyduysak, o şekilde çağırmalıyız.) İkinci parametre opsiyonel seçeneklerdir.

**match metodunun döndürdüğü promise hiçbir zaman reject edilmez. Dosya bulunamasa bile başarılı bir şekilde boş response döner. Bu yüzden match metodunun döndürdüğü promise içindeki response nesnesi kullanılmadan önce mutlaka kontrol edilmeli ve öyle döndürülmelidir.**

```javascript
caches.match("/logo.png").then(function (response) {
  if (response) {
    return response;
  }
});
```

#### Örnek uygulamamızda cache kullanımı

Bu adımlardan sonra html dosyasını cacheledik. Ancak bu yeterli değil! Bu html ile birlikte gelecek olan stil ve görselleri de CacheStorage içine eklemeliyiz.

(Bunun için önce promise chain ile cache.add leri zincirleme bağlamış, bunu atlıyorum hem efektif olmayan uzun bir metot hem de kaynakları paralel değil seri indiriyor.)

`cache.addAll` metodu örneği

```javascript
var CACHE_NAME = "gih-cache";
var CACHED_URLS = [
  "/index-offline.html",
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
  "/css/gih-offline.css",
  "/img/jumbo-background-sm.jpg",
  "/img/logo-header.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});
```

Böylece tüm gerekli dosyalar eklenmiş oldu.

#### Offline durumda her request için doğru dosyayı göndermek

Burada küçük bir kontrol ekleyeceğiz. Eğer yapılan request bir html request ise, index-offline.html dosyasını döndüreceğiz. (Bunu yapmamızın sebebi, index-offline.html dosyasının aynı isimde istenmeyecek olması. Kullanıcı aslında ana sayfayı talep ediyor.) Diğer tüm durumlarda, kullanıcının talep ettiği her dosyaya cache den bakıp varsa göndereceğiz.

```javascript
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get("accept").includes("text/html")) {
          return caches.match("/index-offline.html");
        }
      });
    })
  );
});
```

Buradaki fetch metodu online kullanıcılar için aldığı requesti sunucudan alıp doğrudan döndürür. Ama hata durumunda tüm cacheler içinde arama yapar ve dönen yanıtı cache içinde bulursa döndürür.

Bulamadığı durumda, bir kontrol daha yapar, bu istenen request bir html dosyası mıydı? Bu durumda da index-offline.html i döndürür.

#### IGNORESEARCH seçeneği

caches.match gelen kaynak url sine göre hareket ediyor. URL bir sebepten (UTM parametreleri gibi) değişirse bunu dikkate almamak için bir seçenek `{ ignoresearch: true }` seçeneğidir.

Mesela ana sayfaya kişi `/?utm_source=adwords&utm_campaign=kampanya` şeklinde düştüğünde veya başka bir query string ile geldiğinde bunu görmezden gelmesi için şöyle bir seçenek eklemeniz gerekir:

`caches.match(event.request, {ignoreSearch: true})`

#### HTTP Cache ve HTTP üst bilgileri (HTTP Headers)

CacheStorage kullanırken HTTP üst bilgileri ile (max-age) oluşturulan tarayıcı önbelleği yönetilemez.

Eğer network üzerinden çekmek istediğiniz veri tarayıcı cache indeyse oradan gelecektir. Onu ayrıca yönetmeniz gerekir. Bu konuyla ilgili Jake Archibald'ın bir yazısı var: [Caching best practices](https://jakearchibald.com/2016/caching-best-practices/)

### Bölüm 4 - Service Worker Yaşam Döngüsü ve Önbellek Yönetimi

Service Worker'lar ile çalışmaya başladığınızda, çalışmalarında bir gariplik sezeceksiniz.

Bazen sayfayı yükler yüklemez Service Worker kontrolü ele almış olacak, bazen ise Service Worker aktif iken kontrolü ele alması için bir kez sayfayı yeniden yüklemeniz gerekecek. Öyle durumlar olacak ki, sayfayı ne kadar yenilerseniz yenileyin Service Worker yeni versiyonu bir türlü yayına girmeyecek.

Bölüm 2'de Developer Tools'tan "Update on reload" ayarını açarak sayfa yenilenir yenilenmez Service Worker'ın devreye girmesini sağlamıştık. Ancak gerçek hayatta işler böyle yürümez :)

Service Worker'ların bu şekilde güncellenmesi başlangıçta garip gelebilir, ancak onların basit kurulum aşamalarını öğrendikten sonra bu davranışların (sayfa yüklendiği halde aktif olmaması veya hemen devreye girmemesi gibi davranışlar) tümü anlam kazanmaya başlayacak.

> Not: Bu bölümde, tarayıcı geliştirici araçlarına (Developer tools) atıfta bulunulacak. Her tarayıcının Service Worker için araçları var, bölümün basit / kısa olması için, (her araçtan tek tek bahsetmemek için) sizin Chrome kullandığınız varsayılmıştır.

Bir kullanıcının uygulamamızı nasıl kullandığını görelim. Bunun için kitapla birlikte gelen uygulama kodunu bölüm 4 başlangıcı için ayarlayalım.

```
git reset --hard
git checkout ch04-start
```

Eğer kitap örnek kodunda yerel sunucu çalışır durumda değilse `npm start` ile çalışır hale getirin.

`serviceworker.js` dosyasındaki kodları silin ve şu kodları ekleyin:

```javascript
self.addEventListener("install", function() {
  console.log("install");
});

self.addEventListener("activate", function() {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  if (event.request.url.includes("bootstrap.min.css")) {
    console.log("Fetch request for:", event.request.url);
    event.respondWith(
      new Response(
        ".hotel-slogan {background: green!important;} nav {display:none}",
        { headers: { "Content-Type": "text/css" }}
      )
    );
  }
});
```

Bu kodda `install` ve `activate` olayları dinlenip `console.log` ile developer console a yazdırılmaktadır. Ayrıca `bootstrap.min.css` için oluşan `fetch` istekleri yerine arka planı yeşil yapan ve navigasyonu gizleyen bir css response sıfırdan oluşturulup gönderiliyor.

1. Uygulamayı tarayıcınızda açın. `http://localhost:8443`
2. "Update on reload" ayarını kapatın. (Çünkü bu bölümde Service Worker yaşam döngüsünü göreceğiz)
3. Bu sayfa için kayıt edilmiş tüm Service Worker kayıtlarını silin. (Chrome da geliştirici araçlarında - devtools - bunu "Clear Storage" ile yapabiliyoruz.)

Service Worker'ı sildiğiniz için bir sonraki ziyaretinizde henüz Service Worker'ı kurmamış olan ziyaretçi uygulamanızı nasıl görecekse o şekilde göreceğinizden emin oluyorsunuz.

Sayfayı yenilediğinizde sayfanın normal bir şekilde geldiğini göreceksiniz. Konsolda Service worker olaylarıyla ilgili mesajlar görünecek ama sayfaya etki etmeyecek.

Tekrar sayfayı yenilediğinizde bu sefer etki ettiğini (bootstrap.min.css yerine yeşil renk veren response un geldiğini) göreceksiniz. Bu neden böyle oldu? Çünkü ilk yüklenmede Service Worker kuruldu ve aktif edildi ancak hiçbir fetch event Service Worker tarafından işlenmedi. İkinci sayfa yenilemede ise Service Worker önceki ziyarette kurulmuş oluyor ve fetch olaylarını işlemeye başlıyor. Neden değişikliği görmek için iki kez sayfayı yenilemek zorunda kaldık? Bunu anlamak için Service Worker Yaşam Döngüsüne göz atmamız gerekir.

#### Service Worker Yaşam Döngüsü

Bir sayfa için Service Worker kayıt ettiğimizde o Service Worker çeşitli aşamalardan / durumlardan geçmektedir.

```
+------------+     +------------+      +------------+     +-----------+     +-----------+
| Installing |  -> | Installed/ |  ->  | Activating | ->  | Activated |  -> | Redundant |
+------------+     | Waiting    |      +------------+     +-----------+     +-----------+
      |            +------------+                                                 ^
      \---------------------------------------------------------------------------/
```

##### **1. Aşama: Installing (Kuruluyor)**

Yeni bir Service Worker `navigator.serviceWorker.register` metoduyla kayıt edilmeye başlandığında, ilgili serviceworker scripti indirilir, yorumlanır ve "kuruluyor" (installing) aşamasına geçer. Eğer kurulum başarılı olursa Service Worker "kuruldu/bekliyor" aşamasına atlar. (Installed/Waiting)

Bir sebepten installing aşaması başarısız olursa, Service Worker "lüzumsuz" (redundant) durumuna geçer.

Kuruluyor aşamasında `install` olayında `waitUntil` metoduna promise aktarılarak işlem yapılabilir. Bu aktarılan promise çözümlenene kadar kurulum bitmez. Bir sebepten promise reject edilirse, Service Worker kurulumu başarısız olur ve "lüzumsuz" (redundant) durumuna düşer.

> Not: 3. bölümde Service Worker ın başarılı şekilde kurulabilmesi için bazı kaynakların cachestorage a başarılı şekilde yazılmasını bekletmiştik. `install` olayında `waitUntil` içinde cache komutlarını yazarak herhangi bir kaynağın cache e yazılması başarısız olursa kurulum aşaması başarısız olur ve service worker redundant olarak işaretlenip işleme girmez.

##### **2. Aşama: Installed/Waiting (Kuruldu/Bekliyor)**

Service Worker Installing (Kuruluyor) aşamasını başarıyla bitirdikten sonra, "kuruldu" (installed) durumuna geçer. Eğer o an aktif olan başka bir Service Worker yoksa, hemen "aktifleştiriliyor" (activating) durumuna geçer.

Eğer o an aktif olan bir Service Worker varsa "bekliyor" (waiting) durumunda kalır.

> "Bekliyor" durumunu "Service Worker güncelleme" (Updating a Service Worker) bölümünde tekrar inceleyeceğiz.

##### **3. Aşama: Activating (Aktifleştiriliyor)**

Service Worker aktif olup uygulamanızda kontrolü ele almadan hemen önce, `activate` olayı tetiklenir. Kuruluyor aşamasında olduğu gibi, bu olay da içinde bir `waitUntil` çağrısına promise aktarılarak o promise bitince tamamlanacak şekilde ayarlanabilir.

> "Aktifleştiriliyor" durumunda yapacağımız işleri "Neden Önbelleği Yönetmek Zorundayız" (Why We Need to Manage the Cache) bölümünde detaylı göreceğiz.

##### **4. Aşama: Activated (Aktifleştirildi)**

Service Worker aktif olduktan sonra, sayfanın kontrolünü alır ve olayları dinlemeye başlar.

**Bir service worker ancak sayfa yüklenmeden önce onun kontrolünü alabilir. (Zaten yüklenmiş olan sayfanın kontrolünü alamaz.)** Sayfayı yüklediğinizde activated durumuna gelen service worker ın etkisini ancak bir sonraki ziyaretinizde görebilirsiniz.

##### **5. Aşama: Redundant (Lüzumsuz)**

Kayıt edilme (registration) veya yüklenme (install) aşamasında başarısızlığa uğrayan Service Worker'lar doğrudan bu duruma düşer.

Veya yerine yenisi gelmiş "Activated" durumundaki Service Worker'lar bu duruma düşüp "emekli olurlar":)

> Not: Service Worker durumu tarayıcı penceresi veya sekmesinden bağımsız işlemektedir. Eğer bir kullanıcı bir siteye girip Service Worker'ı "activated" durumuna getirmişse, aynı siteye ait ikinci sekme açıldığında aynı service worker tekrar kurulmaz.
> Bu bilgiye dayalı olarak, Service Worker kayıt esnasında bir kez gerçekleşmesi gerekli işleri (cache yönetimi gibi) `install` ve `activate` olaylarının sadece bir kez gerçekleşeceği bilgisiyle yapabiliriz.


## Progressive Web Apps (PWA) - The Complete Guide (Video eğitimi)

[Progressive Web Apps (PWA) - The Complete Guide](https://learning.oreilly.com/videos/progressive-web-apps/9781789135770)