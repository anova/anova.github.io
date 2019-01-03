---
layout: post
title:  "Javascript Promise yapısı ve fetch"
date: 2019-01-05 17:00:00 +0300
categories: javascript
---

## Promise Nedir?

> Promise, bir javascript fonksiyonunun sonucu hemen döndürmeyip, bize sonucu döndüreceğine dair verdiği bir "söz" dür.

### Callback

Promise öncesinde, javascriptte callback kullanımı yaygındı. Bir javascript fonksiyonu kendisine verilen işi hemen yapamıyorsa, (örneğin bir dosya yüklüyor veya sunucu tarafından bir json api çağrısı yapıyorsa) fonksiyona verilen iş hemen bitmez.

Javascriptte "callback" denilen bir fonksiyon referansı, ilgili fonksiyona parametre olarak atanırdı. Bu parametre, işlem bittiği zaman elde edilen veriyle birlikte çağrılırdı.

Temel mantık şuna benzer:

```javascript

function zaman_alan_fonksiyon(secenekler, callback){
  //islemleri yap
  callback();
}
```

Buraya kadar bir sorun yok gibi görünüyor. Ancak birden fazla işlem birbirini bekliyorsa, (illeri seçince, ilçeler ilçeleri seçince de mahallelerin dolduğu üç seçenekli bir yapı düşünün.) callback yönetimi gittikçe zorlaşıyor, kodları gittikçe daha içeriden yazmak gerekiyor. Bu durum "callback hell" (callback cehennemi) veya "stairway to hell" (cehenneme merdiven) şeklinde adlandırılıyor.

jQuery ajax bir süredir `Promise` döndürüyor. jQuery ajax veya yardımcı fonksiyonlarını callback ile çağırmak "merdiven" gibi iç içe bir yazım şekline sebep olabilir.

```javascript
$.get('/iller',{
    success: function(data){
        $.get('/ilceler',{
            success: function(data){
                $.get('/mahalleler', {
                    success: function(data) {
                        //Buraya kadar hatasiz gelmek bile cogu zaman mesele
                    }
                });//end get /mahalleler
            }
        });//end get /ilceler
    }
});//end get /iller
```

### Promise

Promise, basitçe iki "callback" alarak oluşturulan bir nesnedir. Yazımı yaklaşık şöyle:

`const my_promise = new Promise(success, fail);`

### Tarayıcı desteği

https://caniuse.com/#feat=promises