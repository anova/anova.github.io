---
layout: post
title:  "CSS Sistemleri"
date:   2017-03-06 02:35:00 +0300
categories: css sass
---

**Not:** Bu yazı bir taslaktır.

CSS veya SASS yazarken izlememiz gereken çeşitli yöntemler üzerine bir deneme yazısı.

Önceleri bir sunum ve birkaç yazının etkisinde kalıp, DRY css denilen bir yöntemi kullanmıştım. Kullanmakla kalmayıp insanları da kullanması için ikna etmeye çalışıyordum. OOCSS ve DRY benim için her şeyi çözecek gibiydi. SASS kullanımından bile haberim yoktu. Böyle ilginç bir dönemden geçtim etkileri de revizeleri kolayca yapamamak şeklinde devam ediyor.

Sonra okuduğum yazılar izlediğim video ve sunumlardan CSS in C harfinin (Cascading) etkisini azaltan yöntemlerin daha verimli olduğunu keşfettim.

Bu yöntemlerde her element için bir class tanımlanıyor, elementlerin birbiriyle ilişkisi isimlendirme ile kolayca ayırt edilebiliyor.

Bu yöntemlerin avantajlarını saymak istersek:

* Kurallardaki "belirtme gücünü" (Specifity) azaltıyor. Sadece 1 class ile kurallar tanımlanıyor. Bu da kuralı ezmeyi kolaylaştırıyor.
* Bir blok veya element hakkındaki kod, tekrar etmiyor, tek noktada toplanıyor. Bu sayede o elementi mobil duyarlı (responsive) uyarlamak kolaylaşıyor.

## BEM (Block, Element, Modifier)

Örneğin BEM (Block, Element, Modifier) yaklaşımı çok hoş. Çeşitli wordpress tema veya prestashop eklentilerinde BEM kullanıldığını görüyorum.

[BEM][BEM]


## Maintainable CSS

Maintainable CSS çok basit bir şekilde, her eleman için farklı class vermemiz gerektiğini anlatan bir sistem.

[Maintainable CSS][maintainable-css]

## Enduring CSS (ecss)

[Enduring CSS][ecss]


[BEM]: http://getbem.com
[maintainable-css]: http://maintainablecss.com/
[ecss]: http://ecss.io/