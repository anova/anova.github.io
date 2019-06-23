---
layout: post
title: "CSS Grid"
categories: css
---

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