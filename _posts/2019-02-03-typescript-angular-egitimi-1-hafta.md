---
layout: post
title:  "TypeScript ve Angular eğitimi 1. Hafta notlarım"
date: 2019-02-03 20:10:00 +0300
categories: angular typescript
---

[Stackblitz örnekleri][Stackblitz]

Şubat ayı boyunca hafta sonları angular ve typescript eğitimi alacağız. Bu eğitimden aldığım notları temize çekiyorum. Bu yazıda ilk hafta notları bulunmaktadır.

## TypeScript

- TypeScript geliştirilmesinde Anders Hejlsberg (Delphi dilini de geliştiren ve C# ekibinde de bulunan bir kişi) rol almıştır.
- Amaç javascripti daha köşeleri keskin, **strongly typed** bir biçimde yazabilmek. Tip belirtmeden de yazmak mümkün ama kullanım amacına ters, önerilmiyor.
- Kurmak için öncelikle [Node][Node] un sistemde kurulu olması gerekli. 
- Öğrenim amaçlı olarak sistem çapında global kurduk. `npm install -g typescript`
- Ama bir proje geliştirirken sistem çapında global kurulum tavsiye edilmiyor. Projeye özel kurulması daha sağlıklı. TypeScript versiyon atladığında, eski projelerin halen önceki TypeScript versiyonuna göre davranabilmesi için.
- TypeScript ile, bir değişkenin tipini belirtebiliriz.

```typescript
let a: number = 10;
```

- TypeScript transpiled bir dildir. Derlendiği zaman yine bir kaynak kod ortaya çıkar. .ts dosyalarını .js dosyalarına çevirir.

Sitesine link: [TypeScript][TypeScript]

## Angular

- Angular ikinci versiyonundan bu yana versiyonuyla tanıtım yapmayı bırakmıştır. ( Angular 3, Angular 4, Angular 5 dememektedir.)
- Angular kurulumu için öncelikle [Angular CLI][Angular CLI] (Command Line Interface) sisteme kurulmalıdır.
- **Kurulumu:** `npm install -g @angular/cli`
- Angular CLI global olarak kurulabilir. Bunda bir sorun yoktur.
- Yeni bir angular projesi oluşturmak için `ng new proje` komutu verebiliriz. Bu komut bulunduğumuz klasörde "proje" adında bir klasör açar ve içinde bir angular projesinin iskeletini oluşturur.
- Projeyi oluşturduktan sonra, oluşturduğumuz klasöre geçip, `cd proje` uygulamayı test amaçlı çalıştırmak için `ng serve` ile çalıştırabiliyoruz.
- Varsayılan angular test portu 4200 dür. `http://localhost:4200` veya `http://127.0.0.1:4200` adresine girip test yayınını görebiliyoruz.
- `ng serve --open` komutunu verirsek, test yayınını bizim için varsayılan tarayıcıda açmaya çalışır.
- Angular MVVM (Model View ViewModel) design pattern üzerine inşa edilmiştir. Her şey komponent mantığına oturtulmuştur.
- Bir angular uygulamasının temel hiyerarşisi: app, module, component, item
    - app: en üstteki katmandır. Modülleri içerir.
    - module: componentleri içerir.
    - component: ViewModel mantığını tutan kısımdır. View ile ilgili şablonları html de, kodları ise .ts dosyalarında tutar. Aynı zamanda burada component bazında stiller de ekleyebiliriz. İçinde barındırdığı öğeleri (item) tutar.
    - item: ts, html, css, spec gibi dosyalardır.
        - ts dosyaları kodun çalışma mantığını
        - html dosyaları component şablonunu
        - css dosyaları stil
        - spec dosyaları da modülün arayüz testini tutar.

### Varsayılan modül

Yeni bir uygulama oluşturduğumuzda, AppModule.ts adlı bir modülü varsayılan modül yapar.

Varsayılan modülü belirleyen kısım app.module.ts dosyası içindeki bootstrap ayarıdır.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Model oluşturmak

Veriyi tutması gereken kısım model sınıfıdır. İyi geliştirme pratiği olarak her sınıfın boş da olsa bir modeli olmalı ve veriyi o model tutmalıdır.

### Servis oluşturmak

Bir işlem yapılacaksa, bunu yapmak servisin işidir. Component veya model işlem veya hesaplama yapmamalıdır. Component işlemi servise yaptırmalıdır. Verileri de modelde tutmalıdır.

### İsimlendirme standartları (Model ve Servisler hangi klasöre gelmeli?)

Eğer bir servis veya model componente özel ise, componentin bulunduğu klasörde componentin ön eki, model veya service ve ts olacak şekilde isimlendirilmeli. Örneğin app.module.ts için oluşturulan model aynı klasörde app.model.ts, servis ise app.service.ts olmalı.

Uygulamada genel olarak kullanılacak model ve servisleri app/models veya app/services klasörlerinde tutmak daha mantıklıdır.

### Bir component başka bir componenti nasıl çağırır? (Nested components)

`<app-component></app-component>` şeklinde ilgili componentin selectorünü template içinde geçirerek çağırabilir.

### Binding

#### One way binding

`{% raw %}{{ model.Member }}{% endraw %}` şeklinde html template içinde geçtiğinde sadece bir yönlü binding. Güncelleme yapılamaz sadece okunur.

Not: modeldeki veriyi componente bağlamak için örnek bir yazım şekli eklemek lazım.

#### Two way binding

Formlarda binding yapıldığı zaman, formlar bind edilen ifadeyi değiştirebilir.

`<input type="text" [(ngModel)]="model.Member">` gibi bir yazımı var. Formları bağlamak için, `import { FormsModule } from '@angular/forms';` satırını ekleyip

#### event binding

`<button (click)="btn_Click()">Buton click örnek</button>` böyle bir yazım şekli var. buradaki `btn_Click` ifadesinin component içinde tanımlanması gereklidir.

### Direktifler

#### *ngIf, ng-template

*ngIf belirlenen bir şart doğru olduğunda içeriği gösterir. Örneğin:

`<h1 *ngIf="model.IsPersonel">Personel</h1>` buradaki `model.IsPersonel` şartı sağlanıyorsa h1 tagı gösterilir. Eğer şart sağlanmıyorsa, tag yalnızca gizlenmez, aynı zamanda sayfaya render da edilmeyecektir. (Sayfayı veya komponenti öğeyi denetle ile incelediğimizde ilgili tagı yine göremeyiz.) Burada yaptığı iş basitçe gizlemek değil sayfaya render edilip edilmeyeceğine karar vermektir aslında.

#### *ngIf else ile kullanımı (ng-template)

```html
<h1 *ngIf="model.IsPersonel else not_personel">Personel</h1>
<ng-template #not_personel>
  <h1>Personel değil</h1>
</ng-template>
```

#### *ngFor

*ngFor direktifi bir koleksiyonun içinde döngüye girip, bu döngüde tüm elemanları bastırmak için idealdir. Kendine özgü bir "micro syntax" ı vardır, genellikle şöyle kullanılır:

`*ngFor="let i of collection"`

Tırnak içinde geçen ifade bir `of` kullanıyor. ES6 ile javascript'e gelen for..of döngüsü diğer dillerdeki foreach gibi çalışır. Bu direktif angular dokümanında *ngForOf diye de geçiyor bu yüzden.

* [*ngIf için stackblitz'de hazırladığım örnek için tıklayınız][ngIf Stackblitz]
* [*ngFor için stackblitz'de hazırladığım örnek için tıklayınız][ngFor Stackblitz]

[Node]: https://nodejs.org/en/
[TypeScript]: https://www.typescriptlang.org/
[Angular CLI]: https://cli.angular.io/
[Stackblitz]: https://stackblitz.com/@anova
[ngIf Stackblitz]: https://stackblitz.com/edit/anova-angular-directives-sample?file=src%2Fapp%2Fcomponent%2Fmuhasebe%2Fmuhasebe.component.html
[ngFor Stackblitz]: https://stackblitz.com/edit/anova-angular-directives-sample?file=src%2Fapp%2Fcomponent%2Fresimler%2Fresimler.component.html