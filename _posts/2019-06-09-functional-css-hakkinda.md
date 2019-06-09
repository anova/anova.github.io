---
layout: post
title: "functional css hakkında"
date: 2019-06-09 12:20:00 +0300
categories: css
---

Not: Bu yazıyı, konuyla ilgili çeşitli insanlardan görüş toplamak ve şimdiye kadar yaptığım araştırmaları paylaşmak amaçlı yazıyorum. Referans alınacak kadar detaylı değil henüz.

CSS ile uğraşırken, CSS hakkında hoşuma gitmeyen birkaç detay var.

* **"Specifity wars":** Bir kişinin yazdığı stilin specifitiy puanının çok yüksek olması ve bizim eklediğimiz yeni elementleri etkilemesi. (Genellikle temalarda karşıma çıkan bir sorundur.)
* **Global scope:** Yazdığım her stil, tüm sayfayı hedeflediği için, namespace benzeri bir yapı için "ön ek" getirme gibi çözümlere başvurmak zorunda kalıyorum.
* **Yeniden kullanılabilirliğin çok az olması:** Specifity ve global scope un getirdiği sorun. Burada yeniden kullanılabilirlik, hem projeler arası yeniden kullanılabilirliğin az olması hem de aynı proje içinde yeni bir sayfa, form vb. öğe yapıldığı zaman yeniden kullanılabilirliğin az olmasıdır.

Bu konuda araştırmalarımı yoğunlaştırdığımda çeşitli makaleler, youtube da çeşitli "css talk" ve benzerlerinde CSS in global scope undan ve genel olarak CSS den herkesin şikayetçi olduğunu, buna çözüm aradığını farkettim. Bu konularda önerilen çözümlerden birisi fonksiyonel css. Mantıklı geldiği için bu konuda son birkaç gündür yaptığım araştırmaları özet olarak toparlamak istedim.

- **Nedir?**
	- Semantik css, nesnenin yaptığı işe göre class ismi almasını esas alıyor.
	- Fonksiyonel css, nesnenin görünümüne göre "utility class" ların birleşimiyle stil almasını sağlıyor.
	- Bootstrap v4 de zaten birçok fonksiyonel class ismi kullanıyoruz. (.row, .col-*, .p-3, .card, .media gibi class isimleri hep "presentational classnames" olarak geçiyor.)

- **Avantajları:**
	- "Context switch" yok. Daima html üzerinde kalıyoruz ve kod yazıyoruz. Açıklaması: Html ve css birbiriyle paralel gitmek zorunda. Semantik (anlamsal) yazdığımız zaman, css html hakkında bilgi sahibi olmak zorunda kalıyor. Biz bu durumu tersine çevirip, html i css hakkında bilgi sahibi yapıyoruz.
	- CSS boyutunda azalma, css büyümesinin kontrol altına alınması. Semantik kodlamada birden fazla kişi bir proje üzerinde css yazmaya devam ettikçe, css global scope kullandığı için ve bazı yan etkileri kestirilemediği için bir taraf için yazdığımız kod, diğerini etkileyebiliyor. Fonksiyonel css yazıldığında, her class sadece tek iş yaptığı için html içinde bu classları birleştirerek işlem yapılıyor.
	- Yan etki ve yan etkiye dayalı oluşan beklenmedik değişimlerin önüne geçilmesi. Bir html elementine baktığımızda onun görünümünde etki eden her şeyi öğeyi denetle üzerinde görebiliyoruz.
	- Specifity (belirtim gücü) azalması. Tüm işler "utility class" veya "presentational class" adı verilen class ların bir araya getirilmesiyle yapıldığından, tüm css specifity tek class seviyesinde kalıyor. ( Bu daha sonradan gerektiğinde kolayca ezilebilmesi, ve kolay hata ayıklanabilmesi demektir. )
	- Hızlı yorumlanması. Tarayıcı bir sayfayı yorumlarken yaptığı ana iş kalemlerinden birisi css i yorumlayıp sayfayı çizmektir. Biri de javascript yorumlanması ve işletilmesidir. Css yorumlanırken selector ler sağdan sola yorumlanır. Yani ".container .element" gibi bir seçicide önce ".element" lerin hepsi eşleşir, sonra ".container" içinde bulunan ".element" ler bulunur. Biz specifity i class seviyesinde tutarak, bu yorumlamayı mümkün olduğunca hızlandırıyoruz.

- **Dezavantajları:**
	- Karmaşıklığı CSS üzerinden alıp, HTML üzerine taşıyoruz. class="" kısmı yapmak istediğimiz işe göre çok uzayabiliyor.
	- Tutarlılığı sağlamak için bir "tasarım sistemine" (design system) ihtiyaç var.
		- O projeye özel font büyüklükleri (en büyük, büyük, normal, küçük, en küçük)
		- Font aileleri (O projede kullanılacak fontlar)
		- Renk paleti (Bu kısım çok önemli, çoğu büyük projede bir renk paleti kullanılmadığı için, insan gözünün ayırt edemeyeceği şekilde grinin, mavinin tonları oluşuyormuş.)
		- İkonlar (tercihen svg)

- **Nasıl kullanabiliriz?**
- Öncelikle yapacağımız proje üzerinde genel olarak bir "design system" oluşturarak başlamalıyız.
- Tasarım sistemi minimum olarak şunları içermeli:
	- Bu projede hangi fontlar kullanılacak?
	- Fontların büyüklükleri hangi aralıklarda olacak?
	- Hangi renkler kullanılacak? (Birincil renk, ikincil renk, uyarı rengi, işlem başarılı rengi, hata rengi)
	- Projenin kendine özgü bir ikon seti var mı? Veya mevcut ikon setlerinden hangisini kullanacağız?
- Sonraki adım bu tasarım sistemine özgü fonksiyonel sınıfları yazmak. Bu konuyla ilgili sınıfları yazmayıp, bir araca ürettirmek mantıklı bir çözüm. Şu anda bu konuyla ilgili bulduğum en esnek araç Tailwind CSS. https://tailwindcss.com/
- Geliştirme sırasında tailwindcss gibi bir araç, projemizde kullandığımız veya kullanmadığımız tüm olasılıklarla bir css oluşturacaktır. ( dev bir css oluşuyor ) Bu geliştirme için iyidir. Öğeyi denetle ile hızlı hızlı çeşitli ihtimalleri deneyebilmemizi sağlar. Yayına çıkarken sadece kullandığımız css lerin kalması için PurgeCSS ile kombine kullanabiliriz.
- Bu konuyla ilgili hazırladığım örnek bir gulpfile.js dosyası: https://gist.github.com/anova/7c9a49abd462abe0689f4ef03ae67272