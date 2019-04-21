---
layout: post
title: "Promise ve fetch"
date: 2019-04-21 14:20:00 +0300
categories: javascript
---

Promise, bir işlemin başarılı veya başarısız olarak biteceğini garanti eden bir yapıdır.

> Promise, bir javascript fonksiyonunun sonucu hemen döndürmeyip, bize sonucu döndüreceğine dair verdiği bir "söz" dür.

Promise kullanımı iki aşamadan oluşur. Birincisi promise nesnesini tanımlamak, ikincisi de tanımlanan nesneyi kullanmaktır.

## Promise tanımlamak

Promise tanımlanırken bir fonksiyonu parametre olarak alır. Bu fonksiyonun iki parametresi vardır.
1. resolve: Promise içinde tanımlanan işlem başarılı olunca ne çalışacak?
2. reject: Promise içinde tanımlanan işlem bir sebepten başarısız olursa ne çalışacak?

`let promise_object = new Promise(function(resolve, reject){ /* islemler buraya */ });`

## Promise kullanmak

Promise kullanırken `then` ve `catch` ile promise in çözümlenmesini (resolve) veya hata vermesini (reject) takip edebiliriz.

```javascript
promise_object.then(function(data){
    console.log(`Promise resolved. data: ${data}`);
}).catch(function(reason){
    console.log(`Promise error. Reason: ${reason}`);
});
```

Tanımlama ve kullanımı bir örnek üzerinde görelim:
(Bu örneği tarayıcınızdaki javascript konsoluna yapıştırıp deneyebilirsiniz.)

```javascript
// Promise nesnesini tanımlayalım.
let promise_obj = new Promise( (resolve, reject) => {
    // Promise daki beklemeyi taklit etmek için
    // setTimeout metodunu kullanıyoruz.
    setTimeout( ()=> {
        // 500'e kadar rastgele bir sayı seçelim.
        const number = Math.floor(Math.random() * 500);
        // Eğer sayı 250 den büyükse
        // promise başarılı şekilde sonuçlansın.
        // (resolve)
        if(number > 250){
            resolve(number);
        } else {
            // Eğer sayı 250 den büyük değilse
            // promise başarısız şekilde sonuçlansın
            // (reject)
            reject(`${number} 250 den büyük değil.`);
        }
    }, 2000 );//2 saniyelik gecikme
} );

//Tanımladığımız promise_obj nesnesini kullanalım.
promise_obj.then((data) => {
    // Promise başarılı olursa, 
    //then kod bloğu devreye girer 
    //ve resolve callback'e gönderdiğimiz datayı
    //buradan okuyabiliriz.
    console.log(`Promise resolved. data: ${data}`);
}).catch((reason) => {
    // Promise başarısız olursa, 
    //catch bloğu devreye girer 
    //ve reject callback'e gönderdiğimiz 
    //parametreyi buradan okuyabiliriz.
    console.log(`Promise rejected. reason: ${reason}`);
});
```

Burada basitçe gördüğümüz gibi, 2 saniyelik bir gecikme sonrası bir fonksiyon çalıştırılıyor. Bu fonksiyonda rastgele bir sayı seçiliyor. Bu sayı 250 den büyük ise `then`, büyük değil ise `catch` tetikleniyor.

Daha fazla bilgi ve kaynak: [MDN Promise referansı][MDN Promise]

## fetch nedir?

fetch, XMLHttpRequest nesnesinin modern tarayıcılarda karşılığıdır. fetch ile herhangi bir network kaynağını (json, dosya vb.) okuyabilirsiniz. Ağ üzerinden bir kaynağı talep ederken bu kaynağa parametre göndermeniz de mümkündür.

Ben burada en basit kullanımı olan json data okuma üzerinde duracağım. Bugünlerde ajax request oluşturmayı ağırlıklı olarak json daha okuma üzerinde kullanıyorum.

### fetch kullanımı ve promise chain

fetch kullanımına örnek verebilmek için CORS (Cross Origin Resource Share) açık olan örnek bir servise ihtiyacım var.

Google aramasında "fake json api" aramasında ilk sırada jsonplaceholder.typicode.com çıktı. Oradaki örneği kullanıyorum. [Jsonplaceholder Typicode][jsonplaceholder]

Aşağıdaki kodu tarayıcınızın javascript konsolundan deneyebilirsiniz:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1') //json datayı getirme işlemini başlattık.
  // işlem sonuçlanınca gelen
  // datanın json olduğunu belirttik
  .then(response => response.json())
  // ve bir sonraki adıma 
  // json data aktarıldı.
  // Burada da konsoldan yazdırıldı.
  .then(json => console.log(json))
```

Burada iki adet `then` birbirine zincirleme olarak bağlanmış. Buna **promise chain** diyoruz. Birinci promise bitince ondan dönen veriyi değiştirip geri döndürüyoruz. İçerideki `response.json()` ifadesinin dönüşü de bir promise, onu bir sonraki `then` yakalıyor.

[MDN Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[jsonplaceholder]: https://jsonplaceholder.typicode.com/