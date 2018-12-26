---
layout: post
title:  "Git from bottom up notları"
date:   2017-03-06 00:15:00 +0300
categories: git
---

Aklımda kaldığı kadarıyla, özeti yazmak istedim.

- git argoda "aptal" gibi bir kelimeden geliyor. Linus Torvalds'ın git i neden yazdığıyla ilgili güzel bir anlatım, Muhammed Tahiroğlu'nun blogunda var.
- git'in sloganı "stupid content tracker"
- Temeli basit bir protokole dayanıyor.

- Git dosyalar arasındaki farkları ( diff ) tutmaz, daima dosyaların o anki durumunun bir görüntüsünü tutar ( snapshot )

## BLOB
- BLOB herhangi bir dosyanın git objesi olarak saklanmasının yoludur.
- Bu dosyalar repository kökünde bulunan ".git" isimli gizli klasörde duruyor. ( Sanırım objects klasöründe )
- Git bu dosyaları nasıl saklayacağına nasıl karar veriyor?
- Git dosyanın içeriğine göre bir SHA-1 hash üretiyor. ( Hash: bir içeriğin özetinin çıkartılması işlemidir. Tek yönlüdür, geriye döndürülemez. Örneğin isminizin harflerinin kaçıncı harf olduğunu bulup toplamak bir hash metodu denilebilir. Birden fazla içerik aynı hashi üretme ihtimali vardır. Ancak bu SHA-1 hash için çok çok küçük bir ihtimaldir. )
- Hash üretildikten sonra bu hashin ilk iki karakteri klasör ismi oluyor.
- Hash'in geriye kalan karakterleri dosya ismi oluyor.
- Dosya içeriği bu klasör/dosya kombinasyonunda saklanıyor. İçerik burada duruyor. Buna BLOB deniliyor.
- Dosyanın içeriği değişmediği sürece, üretilen hash değişmeyeceği için, git sürekli aynı hashi üretiyor ve yeni bir BLOB üretmeye gerek kalmıyor. ( Dosyanın ismi ve yeri değişse de BLOB nesnesi değişmiyor. )

## TREE
- BLOB dosyaların içeriğini tutar, ancak hangi klasörde olduğunu veya isimlerini tutmaz.
- Bu işi TREE nesneleri yapar.
- TREE nesneleri basit text dosyaları gibidir.
- Her satırda işaret ettiği BLOB veya TREE nesnelerinin hashi türü ve nesnenin ismi ( dosya veya klasör ismi ) bulunur.
- TREE nesneleri başka TREE nesnelerini içerebilir. Böylece iç içe klasör durumları karşılanır.
- Bir dosyanın içeriği değil de sadece bulunduğu klasör veya adı değiştiyse aynı BLOB nesnesinin TREE içindeki yeri değişir.
- Her commit içinde bir TREE vardır. bu TREE o anki BLOB lara verdiği referanslar ile tüm dosyanın o commit yapıldığı anki görüntüsünü ( snapshot ) verir.


## COMMIT
- Her COMMIT bir TREE içerir.
- COMMIT ler birbirine parent - child ilişkisiyle bağlıdır. Her commit kendinden sonra gelen commitlerin atasıdır.
- COMMIT ler de tıpkı git içindeki diğer nesneler gibi SHA-1 hash leri ile ayırt edilirler.
- Bu hash COMMIT i atan kişinin kullanıcı adı ve emailini de hash hesaplamasına dahil eder. Dolayısıyla birebir aynı değişiklikleri yapsa bile iki farklı kişinin yaptığı commit hash birbirinin aynısı olamaz.
- Eğer bir commit in birden fazla atası ( parent )  varsa, bu commit bir merge'dir.
- Eğer bir commit in iki veya daha fazla sondaki commiti varsa, bu ya bir branch'tir. Ya da iki farklı kişi aynı commit üzerinde farklı çalışmalar yapmıştır. ( Git protokolü açısından bu iki durumun bir farkı yoktur. Sadece isimleri farklıdır. )
- Git push attığımız zaman, önce pull almamız gerektiğini nasıl bilir?
- Bunu serverdaki HEAD ile bizdeki HEAD arasındaki bir karşılaştırma ile yapar.
- Eğer bizim sunucuya atmaya çalıştığımız HEAD ile sunucudaki HEAD doğrudan doğruya bir parent-child ilişkisi içinde değilse, ( düz bir çizgi çizerek bizim bulunduğumuz yere ulaşamıyorsa yani bizim yaptığımız işin temel aldığı commit son commit değilse, başkası bizden önce push atmışsa )
- Bize "Bu göndermeye çalıştığın commit benim historyimle uyumlu değil. Önce bendeki historyi çek ( pull) kendindeki history ile birleştir. ( merge ) sonra bendeki historydeki son commit sendeki son HEAD in parenti olsun böylece kabul edebilirim." der.

## HEAD
- O anda çalışma dizininin bulunduğu commit hash e bir referanstır.
- Basit bir text dosyasıdır. .git klasörü içinde göz atabilirsiniz.
- git checkout <commit hash> denerek geçmişteki bir duruma dönülebilir.

## CONFLICT
- Normalde git aynı dosyada veya aynı satırlarda değişiklik yapmamışsak, bize hissettirmeden merge işlemini yapar.
- Aynı dosyada aynı satırda farklı kişiler, farklı değişiklikler yapmışsa, git bunlardan hangisinin geçerli olduğunu bilemez. Elle bizim düzeltmemizi ister.
- Bunun için conflict marker denilen bir yapı oluşturur. Yaklaşık şuna benzer:

<<<<<<<<<<<<<<<<<<<<<<<<<<< bizdeki commit hash
bizim yaptığımız değişikler
buradaki satırlarda
===========================
başkasından gelen değişiklikler
buradaki satırlarda
başkasının yaptığı commit hash >>>>>>>>>>>>>>>>>>>

`git checkout dosyaismi --ours`
bizim yaptığımız değişiklikleri alır

`git checkout dosyaismi --theirs`
karşı tarafın yaptığı değişiklikleri alır

İkisinden de almak istiyorsak, bir metin editörüyle düzenleme yapıp birleştirebiliriz.

Kitabın ilk iki bölümünden aklımda kalanlar bunlar. Şu an üçüncü bölümü anlamaya çalışıyorum.
Anlayabilirsem bir anlatım daha yapabilirim belki.
Bu muhteşem kitabın linkini de tekrar vereyim :)

https://jwiegley.github.io/git-from-the-bottom-up/