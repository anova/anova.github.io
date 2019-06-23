---
layout: post
title: "PWA: Progresif Web Uygulamaları"
date: 2019-06-22 18:30:00 +0300
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

- Ana ekrana eklenebilme [Add to Home Screen][addtohomescreen]
- Offline veya düşük hızlı bağlantılarda sorunsuz çalışabilme (İşlem internet bağlantısı gerektiriyorsa, tarayıcının internet bağlantınız yok uyarısı yerine, uygulamanın o duruma özel uyarısını göstermek ve yeniden bağlanmayı deneyebilmesi)
- Uygulama mağazaları: PWA lar arama sonuçlarında ve uygulama mağazalarında kullanılabilir (Uygulama mağazalarına nasıl ekleneceğini şu an bulamadım?)
- Bildirimler (Notifications): Uygulama açık değilken bile bildirim almak isteyen kullanıcılara bildirim gönderebilir
- Payment Request API

[addtohomescreen]: https://developers.google.com/web/fundamentals/app-install-banners/

Konu ile ilgili eğitimler:

- [Progressive Web App codelab][pwa codelab]
- [Progressive Web App training][pwa training]


[pwa codelab]: https://codelabs.developers.google.com/codelabs/your-first-pwapp/
[pwa training]: https://developers.google.com/web/ilt/pwa/