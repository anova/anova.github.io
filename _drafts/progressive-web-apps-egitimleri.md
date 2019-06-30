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


## Progressive Web Apps (PWA) - The Complete Guide (Video eğitimi)

[Progressive Web Apps (PWA) - The Complete Guide](https://learning.oreilly.com/videos/progressive-web-apps/9781789135770)