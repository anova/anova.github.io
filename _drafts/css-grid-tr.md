---
layout: post
title: "CSS Grid / Türkçe"
categories: css
---

[CSS Grid / English]({% link _drafts/css-grid-en.md %})

> CSS Grid iki boyutlu bir yerleşim sistemidir.

CSS Gridi iki ana başlık altında inceleyebiliriz.
1. `display: grid` özelliğini verdiğimiz kapsayıcı eleman.
2. Kapsayıcı elemanın altındaki, grid alanlarını kullanan elemanlar.

## 1. Kapsayıcı Eleman (grid container)

Flexbox'da olduğu gibi, bir elemana display: grid özelliğini verdiğimizde o eleman bir grid kapsayıcısı olur ve bir seviye altındaki tüm öğelerin yerleşimini belirler duruma gelir.

Flexbox'da bu belirleme işlemi tek eksenlidir. Grid de hem yatay hem de dikeydir.

Grid bu işlemi hayali çizgiler (grid lines) üzerinden yapar ve alanlar arasındaki boşluğu da (gap) belirtebilirsiniz. Böylece yerleşim için ekstra divlere gereksinim olmaz. (Not: flexbox'da eksen değiştirmek isterseniz, ekstra bir div açmanız gerekir. ÖRNEK GEREKİYOR)

## 2. Alt elemanlar

Herhangi bir alt eleman, grid layout içinde hücre veya hücreleri kaplar. Bunu belirlemek için çeşitli yollar vardır.

1. Row / Column belirterek
2. Grid area belirterek
3. Kendiliğinden (implicit)

# CSS Grid bir yerleşim sistemidir.

İki boyutlu (row, column) bir CSS yerleşim sistemidir. (Layout)

Flexbox sadece bir boyutlu (flex row veya flex column) çalışırken, CSS Grid iki boyutlu çalışır.

IE 11 ortadan kalktığında, her türlü yerleşim için kullanabileceğiz. Ancak şimdilik, tekrarsız bölgelerine isim verilebilen "layout" lar için kullanabiliriz.

**Yararlandığım kaynaklar:**
- [CSS Grid Layour Crash Course - Traversy Media](https://www.youtube.com/watch?v=jV8B24rSN5o)
- [CSS Grid in IE - CSS Tricks](https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/)

## Faydaları
- Yerleşim için bizi ek yerleşim "div" leri oluşturmaktan kurtarır. HTML çok daha sade oluyor.
- Mobil, tablet, desktop yerleşimlerinde aynı düzeydeki elemanların yerlerini değiştirmek çok daha semantik bir yolla (grid-template-areas) yapılabiliyor.

## Nasıl?
Bir kapsayıcıya `display: grid` özelliğini ekleyince, o kapsayıcı `grid-template-columns` ve `grid-template-rows` ile veya `grid-template-areas` ile içindeki öğelerin otomatik olarak yerleşebileceği hayali grid çizgilerine sahip oluyor.

Sonra bu çizgiler içinde bu kapsayıcının içindeki öğeleri yerleştirebiliyoruz.