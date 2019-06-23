---
layout: post
title: "PWA: Progresif Web Uygulamaları"
date: 2019-06-22 16:00 +0300
categories: pwa
---

- [Progressive Web Applications E-Kitap İngilizce][pwa ebook]
- [Progresif Web Uygulamaları E-Kitap Türkçe][pwa ekitap]

[pwa ebook]: https://www.awwwards.com/PWA-ebook/en
[pwa ekitap]: https://www.awwwards.com/PWA-ebook/tr

# Nedir?

Bir internet sitesinin destekleyen cihazlar için (günümüzde modern tarayıcıların tamamı) uygulama özelliklerini kazanmasıdır.

## Progresif

Elimizde zaten bir internet sitesi var. Eğer bu özellikleri kullanmazsak, bu elimizde kalmaya devam ediyor. Sitemizi PWA üzerine kurmuyoruz, PWA özelliklerini mevcut yapının üzerine kata kata gidiyoruz.

## Web Uygulaması

Mobilden veya masaüstünden ziyaret edilen bir siteyi uygulama yapan şey nedir? Kullanıcılar, bir amaçla siteye geliyor.

- Bir ürünün fiyatını öğrenmek
- Bir konuyla ilgili detaylı bilgi edinmek
- Bir restoranın yemek menüsüne bakmak
- Bir işletmenin telefonunu veya adresine bakmak
- ve benzeri...

Aynı zamanda, site sahiplerinin de hedefleri var.

- Kullanıcıya ürün satmak
- Kullanıcıya ulaşabilmek için bilgilerini almak (form doldurma, rezervasyon yaptırma)
- Ürün veya hizmetinin bilinirliği / tercih edilirliğini arttırmak
- ve benzeri...

Günümüzde siteler en basitinden bir iletişim formu doldurtarak kullanıcı ve site sahibi arasındaki iletişimi sağlıyorsa bu bile bence uygulama sayılması için yeterlidir.

Progresif Web Uygulamalarında bir internet sitesinin mobil uygulamaya göre eksiklerinin giderilmesi amaçlanır.

## Bazı özellikler
- Ana ekrana eklenebilme [Add to Home Screen][addtohomescreen]
- Offline veya düşük hızlı bağlantılarda sorunsuz çalışabilme (İşlem internet bağlantısı gerektiriyorsa, tarayıcının internet bağlantınız yok uyarısı yerine, uygulamanın o duruma özel uyarısını göstermek ve yeniden bağlanmayı deneyebilmesi)
- Uygulama mağazaları: PWA lar arama sonuçlarında ve uygulama mağazalarında kullanılabilir (Uygulama mağazalarına nasıl ekleneceğini şu an bulamadım?)
- Bildirimler (Notifications): Uygulama açık değilken bile bildirim almak isteyen kullanıcılara bildirim gönderebilir
- Payment Request API

[addtohomescreen]: https://developers.google.com/web/fundamentals/app-install-banners/

## Konu ile ilgili eğitimler:

- [Progressive Web App codelab][pwa codelab]
- [Progressive Web App training][pwa training]


[pwa codelab]: https://codelabs.developers.google.com/codelabs/your-first-pwapp/
[pwa training]: https://developers.google.com/web/ilt/pwa/

## Konu ile ilgili videolar ve aldığım notlar:
### [Google I/O 2018, PWAs: building bridges to mobile, desktop, and native (Google I/O '18)][google io 2018]
- FIRE: Fast, Integrated, Reliable, Engaging
    - Fast: Hızlı başlamalı ve hızlı hissettirmeli
    - Integrated: Cihazla entegre çalışmalı, bir uygulamaymış gibi açılmalı, cihazın özelliklerini kullanabilmeli. (Örnek olarak Payment Request API ile ödemeleri kolayca yapabilmeliyim diyor.)
    - Reliable: Uygulama her zaman çalışmalı. Offline veya düşük bağlantı olduğu durumlarda bile bu durumlar düşünülmüş ve uygulama içinde bunlara özel mesajlar veya çözümler sunulmalıdır.
    - Engaging: Bir PWA arama motorları tarafından indekslenebilir. İçinde arama yapılabilir. Link olarak paylaşılabilir. Bu yönüyle kullanıcıları kendine çekebilen bir yapısı vardır.
- Uygulamada konum veya bildirim izinleri sadece ihtiyaç olduğu zaman istenmelidir. (3:12)
    - Mağaza arandığında konumun istenmesi
    - Stokta ürün yoksa, ürün geldiğinde haberdar etmek için bildirim gönderilmesi isteği
    - gibi durumlar.
    - Kullanıcı sayfaya girer girmez hemen izin istemek doğru bir yaklaşım değildir.
- Sign In & Sign Up durumlarını google identity ile çözebiliriz. (3:26)
    - Kullanıcılara giriş yapması veya kayıt olması gerektiğini doğru zamanda göstermeliyiz.
    - Kayıt olmadan yapamayacakları bir durumda göstermeliyiz. Bildirim izinleri de kayıt olmak da sayfaya girer girmez istenmemelidir.
- Ödemelerde (Payments) kullanılabilecek servisler (3:42)
    - Payment Request API
    - Google Pay Integration
- Formlar (4:10)
    - Doğru input tipi
    - autocomplete özelliği
    - Not: Sitelerin %42 si inputlar için doğru klavye tipini göstermiyormuş.
    - Not: Sitelerin %27 si formlarda seçime bağlı alanların hangisi olduğunu belirtmiyormuş.
- [Mobile Web Principles Dev Guidelines][mobile web principles] (5:42)
    - Burada Jenny Gove'un yazdığı "İyi bir mobil site nasıl olur?" prensipleri listeleniyor.
- "FIRE" prensiplerini sağlamak için "Service Worker" kullanırız.Service Worker yapısı bugün tüm modern tarayıcılarda desteklenmektedir. Safari ve Edge dahil.
- Tarayıcıların PWA desteği (6:22):
    - ![PWA Support](/assets/images/2019-06-23-pwa/pwa-support.jpg)
- Starbucks örneği (Çok başarılı bir PWA örneği olarak bahsediyorlar)
    - starbucks.com dan giriş yaparken otomatik doldurma (autocomplete) sayesinde hızlıca giriş yaptı
    - Chrome menüsünden "Ana ekrana ekle" ile telefonun uygulamaları arasına bir ikon olarak ekledi.
    - Chrome u kapatıp, bu ikondan giriş yaptı. Artık bu bir uygulama olarak çalışıyor.
    - Sipariş vermeden önce konum izni istedi, böylece en yakın starbucks a yönlendirebilecek.
    - Siparişini bitirmeden önce uçak moduna geçti.
    - Ödeme adımında hata vermek yerine, "Nakit olarak şubede ödemeniz gereken miktar" diye bir ekran çıkardı.
- Uygulamanızın / sitenizin yüklenmesi 3 saniyeden uzun sürerse, ziyaretçilerinizin yarısından fazlası bir işlem yapmaktan vazgeçer. (%53) (11:38)
- Starbucks bu başarılı uygulamayı nasıl geliştirdi?
    - Fast
        - Hızlı yükleniyor ve hızlı hissettiriyor
        - Sayfa yüklenmeden önce placeholder içerikleri gösteriyor
        - Önceden cachelenmiş veriyi ulaştırıyor
        - Navigasyonlar hızlı hissettiriyor ve gerçekten hızlılar.
    - Integrated (12:32)
        - Credential Management API (Necat: Araştıralım.)
        - Add to Home Screen
        - Android sistemlerde uygulamanızı kullanıcı ana ekranına eklediği zaman chrome otomatik olarak bir APK oluşturuyor. Buna "Web APK" deniyor. Bu sayede hem ekranda hem de ayarlarda uygulamanız görünüyor. Ayarlardan uygulamaya verdiğiniz izinleri değiştirebiliyorsunuz.
        - Chrome, add to home screen bannerını kendi belirlediği bazı kriterlere göre çıkartıyor. (13:49)
        - Bir sitenin PWA standartlarını karşıladığını test etmenin en kolay yolu: Lighthouse
        - 'beforeinstallprompt' olayıyla, kullanıcı önemli bir işlemi yaparken add to home screen banner görüntülenmesi engellenebilir. Bu engellenen banner ın daha sonra uygun bir zamanda gösterilmesi sağlanabilir. (14:30)
        - 'appinstalled' olayı, bir PWA nın zaten kurulu olduğunu tespit etmek için kullanılabilir. (15:18)
    - Reliable (16:11)
        - [Workbox kütüphanesi](https://workboxjs.org)
        - Pre-caching (Önceden cache e alınmış içerikler)
        - Runtime caching (Kullanıcı uygulamayı kullanırken içerikler cache e alınır)
        - Bunlar workbox kütüphanesinde varmış ve starbucks kullanıyormuş.
        - IndexedDB
            - Kullanıcının önceki siparişlerini
            - Seçtiği restoranı / şubeyi
            - Seçtiği ürünleri
            - Kullanıcının cihazında tutar ve offline olarak erişilebilmesini sağlıyor.
    - Engaging (17:05)
        - User experience
        - Ease of use
        - Customization
        - Geri butonunun her zaman kolay kullanılabilir olması
        - Context specific animation & messaging (Kullanıcının aldığı aksiyona göre animasyon ve mesaj görünmesi)
- Konum servislerinin kullanımı (20:10)
    - Kullanıcının konumunu görme (Paylaşım için)
    - Bir konumu bulma
    - Yakındaki restoranları, ibadethaneleri, durakları ve benzeri konumları bulma
    - Yol tarifi: Araçla, toplu ulaşımla veya yürüyerek
- "If you care about performance, prioritize it from the beginning." (21:14)
    - Bir uygulamayı geliştirirken başından itibaren performans gözlenmelidir. Gün be gün. Her zaman.
    - Her commit sonunda uygulamanın performans skoru ölçülmelidir.
    - Bunun için chrome dev tools kullanabilirsiniz.
- Tema rengi (33:45)
    - PWA için manifest.json içinde bir tema rengi (kurumsal renk) belirtebiliyoruz.
- Videonun son dakikalarında "Trusted Web Activities" diye bir şeyden bahsetti ama onu anlayamadım. Android uygulamalarıyla ilgili sanırım.


[google io 2018]: https://www.youtube.com/watch?v=NITk4kXMQDw
[mobile web principles]: bit.ly/mobile-web-principles-dev-guidelines