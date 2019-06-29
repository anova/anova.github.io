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


## Progressive Web Apps (PWA) - The Complete Guide (Video eğitimi)

[Progressive Web Apps (PWA) - The Complete Guide](https://learning.oreilly.com/videos/progressive-web-apps/9781789135770)