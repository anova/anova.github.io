---
layout: post
title:  "Javascript Promise yapısı ve fetch"
date: 2019-01-05 17:00:00 +0300
categories: javascript
---

## Promise Nedir?

> Promise, bir javascript fonksiyonunun sonucu hemen döndürmeyip, bize sonucu döndüreceğine dair verdiği bir "söz" dür.

## Promise yapısını anlamaya çalışalım

Javascript yazarken, bazen bir kaynaktan veri okumamız veya zaman alan bir işi başlatıp, bu işin bitiminde bir işlem yaptırmamız gerekebilir. Örneğin, sunucudan veri alan ajax istekleri hemen sonuçlanmaz. Çok kısa bir süre de olsa sonucu işleyen kodun beklemesi ve sonuç geldikten sonra çalışması gerekir.

Eskiden bu işlem `callback` denilen yapı ile sağlanırdı. XmlHTTPRequest bir callback function alır, işlemi bitirdiğinde bu callback function parametre olarak dönüş değerini alır ve işlerdi. Callback mantığı basittir. Javascript fonksiyonları parametre olarak fonksiyon alabilirler. Siz fonksiyonun ismini parantezler olmadan `islem(parametre_fonksiyon)` şeklinde yazarsanız, adı *parametre_fonksiyon* olan fonksiyon `islem` in parametresi olur. Sonra bunu `islem` içinde istediğiniz yerde parantezlerini ekleyerek `parametre_fonksiyon(data)` gibi çağırabilirsiniz.

Callback yapısı, sürdürülebilir bir yapı değildir. Bir işlem için sorun yoktur, ancak birbirine bağımlı üç-dört işlemde kod içinden çıkılmaz bir hal alır. Her callback parametre olarak gitmesi gerektiği için, kod gittikçe içeri doğru gidecektir.

```javascript
ulkeleri_listele(parametreler, function(ulkeler){
    illeri_listele(ulkeler[0], function(iller){
        ilceleri_listele(iller[0], function(ilceler){
            mahalleleri_listele(ilceler[0], function(mahalleler){
                // kodun içeri geçme
                // seviyesi gittikçe arttı
                // (indentation)
            });
        });
    });
});
```

## Promise nasıl çalışır?

Promise, javascript içindeki yeni bir tür nesnedir. `new Promise(resolve, reject)` şeklinde bir yazımla yeni bir Promise instance oluşturabilir ve bir fonksiyondan döndürebilirsiniz. Burada Promise constructor un aldığı iki parametre olan resolve ve reject birer callback tir. Duruma göre birini çağırır ve Promise ın sonuçlanmasını sağlarsınız.

En basit örneği, tarayıcılardaki `window.setTimeout` ile verebiliriz. Bu fonksiyon iki parametre alır, birincisi kaç milisaniye bekleyeceği, ikinci parametresi ise bekleme süreci sonunda yapacağı işlemin callback idir. Biz setTimeout un hemen bitmemesi özelliğinden faydalanıp, Promise için bir örnek yapmaya çalışalım.

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