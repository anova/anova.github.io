---
layout: post
title:  "Merhaba Webpack!"
date: 2018-12-30 18:00:00 +0300
categories: webpack
---

## Webpack ile ilk karşılaşmam

Webpack ile ilk kez Addy Osmani sayesinde karşılaştım diyebilirim. İlk karşılaşmam hiç de güzel geçmemişti, çünkü alışık olduğum grunt ve gulp çalışma mantığından farklı bir mantıkta çalışıyordu webpack. Uzun zamanlar, ara sıra biraz kullanmaya çalışıp sonra vazgeçtiğim bir araç oldu. (Her seferinde yeterince ciddi denemiyordum, karşılaştığım ilk zorlukta bırakıyordum daha doğrusu.)

## Modern Javascript ve React

Nopcommerce ve Wordpress üzerinde çalışıyoruz. Javascript kodlama biçimimiz script taglarını sırasıyla ekleme ve jquery ağırlıklı. Bir gün yazdığım kodların büyük bir kısmının "null check" denilen nesnenin gerçekten olup olmadığını kontrol eden kodları olduğunu farkettim. Ayrıca dosyalar gereksiz yere şişiyordu, modüler bir yapıya ulaşabilsek (dosyaları mantıklı bir şekilde modüllerine ayırabilsek) kodun ne kadar basitleşebileceğini düşündüm. Bunun için bir modül derleyici gerekliydi.

Ayrıca React kütüphanesinin, tüm projenin onunla yazılmasına gerek kalmadan projenin sadece bir kısmına uygulanabildiğini öğrendim. Bu benim için büyük bir fırsat, mevcut çözümlerin bir kısmını modern javascript ve React ile geliştirebilirim diye düşündüm ve yaklaşık bir buçuk ay önce Webpack ve React öğrenmek için yeniden çalışmaya başladım.

### Çalışma düzenim

Bu sefer bir gün sabahtan akşama kadar tüm enerjimi harcayıp kendimi tüketmeyecektim. Çalışma enerjimi günlerin içinde yayacaktım. Bunun için bir karar verdim. Her gün eve döner dönmez, ilk 20 dakikamı bu işe ayıracaktım. Ayrıca, webpack ve react ile ilgili materyalleri telefonuma da indirdim, metrobüste, yemek sırasında veya yemekte okuyabilmek için. Süre ne kadar kısa olursa olsun bu süreyi küçümsemeden çalışmaya başladım. (Şurada 10 dk. sonra durağa varacağız, 10 dakikada ne olacak diye düşünmeden bir sayfa bile olsun okumaya çalıştım.)

### Yararlandığım kaynaklar

- Webpack için: SurviveJS.com webpack kitabı
- React için: SurviveJS.com react kitabı ve Zekeriya Güzelsoy'un bana verdiği Learning React kitabı
- Redux için: Egghead.io daki ücretsiz Redux eğitimi ve Wes Bos'un LearnRedux.com sitesi

## Webpack

Webpack bir modül derleyicisidir. (Module bundler) İstediğiniz herhangi bir noktadan bir javascript modülünü alır ve çıktı olarak bunu javascript olarak verir.

### Modül nedir?

Bir javascript modülü, başka bir modül tarafından alınabilecek bir class, function, variable export edebilir. import eden modül dependant (bağımlı) export eden modül ise dependency (bağımlılık) dir.

Webpack bir modülün tüm bağımlılıklarını gezer ve hepsini bir araya getirir. Böylece javascript kodu yazarken kodların birbirine olan bağımlılıklarını (hangi kodun önce diğer kodu gerektirdiğini) takip etmenize gerek kalmaz. Siz `reuire` veya `import` ile ilgili modülü dahil edersiniz, gerisini modül derleyici halleder.

### Varsayılan değerler

Webpack varsayılan olarak `./src/index.js` (proje klasörünün içindeki src klasöründeki index.js dosyası) dosyasını giriş noktası (entry) olarak alır. Varsayılan çıktısı da `./dist/main.js` (proje klasörünün içindeki dist klasöründeki main.js dosyası) dosyasıdır.

Detaylı konfigürasyon `webpack.config.js` dosyasından yapılabilir.

Şimdi adım adım, webpack ile react / jsx ile bir "merhaba dünya" komponenti yapacağım.

### Paket yöneticisi: Yarn

Bir süredir grunt ve gulp ile npm i kullanıyordum. Ancak yarn çok daha hızlı. Bu yüzden bu örnekte facebook'un paket yöneticisi yarn'ı kullanacağım.

### .gitignore dosyası

Önce "node" ile bir gitignore dosyası oluşturmalıyız. Çünkü kuracağımız paketlerle node_modules klasörü çok şişecektir. Bu klasörü repository e dahil etmemize gerek yok. package.json dosyasını alan kişi `yarn install` veya `npm install` diyerek ilgili modülleri kendi bilgisayarına kurabilir.

Bu yüzden önce, https://gitignore.io/node adresine gidip .gitignore dosyasını üretelim.

### package.json dosyasını ayarlayalım.

Bunun en basit yolu `npm init -y` veya `yarn init -y` diyerek içi boş varsayılan değerlerle doldurulmuş bir package.json oluşturmak.

Ben `yarn init -y` komutunu çalıştırdım ve bana şöyle bir package.json dosyası oluşturdu:

```json
{
  "name": "webpack-examples",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:anova/webpack-examples.git",
  "author": "Necat Bolpaça <necat@kreatif.net>",
  "license": "MIT"
}
```

### webpack kurulumu

`yarn add --dev webpack webpack-cli`

Bu kurulumu yaptıktan sonra, package.json dosyama yeni satırlar eklendi.

```json
  "devDependencies": {
    "webpack": "^4.28.3",
    "webpack-cli": "^3.1.2"
  }
```

#### webpack'i ayarlamak

Projemizin içindeki package.json dosyası içinde bir "build" komutu oluşturup, webpack i ona bağlayabiliriz. Ben oluşturduğum örnekte birden fazla webpack örneği yapacağım için, birden fazla webpack "script" i oluşturacağım.

Örnek bir webpack scripti aşağıdaki gibidir:

```
"scripts": {
  "build": "webpack --mode production"
}
```

Böylece
```
yarn run build
```
veya
```
npm run build
```
yazarak, webpack i production modunda çalıştırabiliriz.

Ben yapacağım ilk örneği "example1" adlı bir klasörde tutacağım. Bu yüzden konfigürasyon dosyasını example1/webpack.config.js olarak ayarlamak istiyorum. Bunun için package.json dosyama şu satırları ekledim:

```
"scripts": {
  "example1": "webpack --config example1/webpack.config.js --mode production"
}
```

package.json'ın son hali ise:

```json
{
  "name": "webpack-examples",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:anova/webpack-examples.git",
  "author": "Necat Bolpaça <necat@kreatif.net>",
  "license": "MIT",
  "scripts": {
    "example1": "webpack --config example1/webpack.config.js --mode production"
  },
  "devDependencies": {
    "webpack": "^4.28.3",
    "webpack-cli": "^3.1.2"
  }
}
```

### Basit bir örnekle modül mantığı

./src/index.js dosyamızın içeriği şöyle olsun:

```javascript
import variable from './module'

alert(`Hello ${variable}!`)
```

Bu örnekte index.js entry point (giriş noktası), ve `module.js` isimli modülden variable ı talep ediyor.

./src/module.js dosyasının içeriği:

```javascript
let variable = "World";
export default variable
```

example1/src/index.js dosyasını giriş olarak alıp, example1/dist/main.js e çıktı verecek olan webpack.config.js dosyamız ise şöyledir:

`example1/webpack.config.js`
```javascript
const path = require('path')

module.exports = {
  'entry': path.resolve(__dirname, 'src/index.js'),
  'output': {
    path: path.resolve(__dirname, 'dist')
  }
}
```

Bu iki dosyayı oluşturduktan sonra, `yarn run example1` komutunu çalıştıralım ve çıktı olarak oluşan `./dist/main.js` dosyasına bir bakalım:

(Kod çok uzun olduğu için scroll çıkacak, en sonda "Hello World!" göreceksiniz.)

```javascript
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);alert("Hello World!")}]);
```

Burada ne oldu? webpack, giriş noktasını aldı, içindeki modül referansını (bizim oluşturduğumuz module.js dosyasını import ifadesinden tanıyıp) çözümleyip aldı. Sonra bunları "production" modunda birleştirip sıkıştırdı. Bu arada başlangıca kendi kodunu da ekledi.

src içindeki giriş noktasını aldık, dist içine optimize bir şekilde yazdık. Ancak bu scripti çağıran bir html dosyamız yok. SurviveJS webpack kitabında, bu iş için `html-webpack-plugin` öneriliyor.

**Plugin** ve **Loader** mantığı

Webpack bir modül derleyicisidir. (module bundler) Ve sadece javascriptten anlar. Girdisi javascript, çıktısı yine javascripttir. Pluginler webpack'in javascript harici çıktılar üretebilmesini sağlar. Örneğin `html-webpack-plugin` ile webpack html çıktısı üretebilir.

Loader ise, webpack'in modülleri çözümlerken css, sass, jsx, less, imaj dosyaları ve benzeri giriş formatlarını okuyabilmesini sağlar.

`babel-loader`, `sass-loader`, `css-loader` gibi loader tanımlamaları ile, bir modülün içinde ES6 syntaxi ile yazılan javascriptlerin ES5 e çevrilmesini sağlayabilir, sass stylesheet lerin css loader ile yükleyebiliriz. Adım adım gitmeye devam edelim ve ilk örneğimizi html-webpack-plugin ile yapalım.

***Önce kurulum***

`yarn add html-webpack-plugin --dev`

***Sonra konfigürasyonu yapalım*** (Son oluşturduğumuz example1 klasörü üzerinden devam ediyoruz)

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  'entry': path.resolve(__dirname, 'src/index.js'),
  'output': {
    path: path.resolve(__dirname, 'dist')
  },
  'plugins': [
    new HtmlWebpackPlugin({
      title: "Webpack html output",
      filename: "index.html",
      output: path.resolve(__dirname, 'dist'),
    })
  ]
}
```

***clean-webpack-plugin***

Webpack, modüllerimiz değiştikçe, oluşan modül dosyasının sonuna benzersiz bir hash ekleyebilir. (Git commit hashleri gibi) böylece dosya içeriği değiştiği an, yeni bir dosya ismiyle yeni bir js dosyası oluşacaktır ve cache sorunumuz olmayacaktır. Ancak bu durumda, her build işleminde dist klasörünü temizleyecek bir komuta ihtiyacımız vardır. Bu komutu `clean-webpack-plugin` ile verebiliriz.

Kurulumunu ve konfigürasyonunu yapalım. Bu arada "output" a hash ekleyelim.

Kurulumu:

`yarn add clean-webpack-plugin`

`example1/webpack.config.js` dosyası içindeki konfigürasyonu

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  'entry': path.resolve(__dirname, 'src/index.js'),
  'output': {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[hash:5].js"
  },
  'plugins': [
    new HtmlWebpackPlugin({
      title: "Webpack html output",
      filename: "index.html",
      output: path.resolve(__dirname, 'dist'),
    }),
    new CleanWebpackPlugin(
      path.resolve(__dirname, 'dist')
    )
  ]
}
```

Bu konfigürasyondaki şu satıra dikkat ediniz: `filename: "[name]-[hash:5].js"` Burada oluşturulan bundle dosyasının sonuna tire ve sonrasında 5 karakterlik hash gelmesini istiyoruz.

`yarn run example1` veya `npm run example1` dediğimizde önce dist klasörünün içini temizleyecek, sonra modülleri derleyip bir bundle dosyası oluşturacak (hash ile birlikte) en son index.html ile birlikte example1/dist klasörünün içine yazacaktır.

### webpack-dev-server kurulumu

webpack-dev-server "in-memory" çalışan bir sunucudur. Değişiklikleri diske yazmaz. Dosyaları sürekli değiştirmek ve sürekli modül değişikliği yapmak için elverişlidir. Önce projemize kurmamız gerekir.

`yarn add webpack-dev-server --dev`

package.json içinde de şöyle bir değişiklik yapıyoruz:

```javascript
{
  "name": "webpack-examples",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:anova/webpack-examples.git",
  "author": "Necat Bolpaça <necat@kreatif.net>",
  "license": "MIT",
  "scripts": {
    "example1": "webpack --config example1/webpack.config.js --mode production",
    "example1-dev": "webpack-dev-server --config example1/webpack.config.js --mode development"
  },
  "devDependencies": {
    "clean-webpack-plugin": "^1.0.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.28.3",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.14"
  }
}
```

Burada gördüğünüz gibi, "example1-dev" adlı yeni bir script oluşturdum. Bu script webpack-dev-server ı "example1" gibi aynı konfigürasyonla ama development modunda çalıştırıyor.

Çalıştırmak için `yarn run example1-dev` veya `npm run example1-dev` komutunu çalıştırdıktan sonra, webpack development serverın varsayılan portu olan 8080 üzerinden `http://127.0.0.1:8080/` diyerek sonucu görebilirsiniz. (Boş bir sayfada "Hello World!" yazan bir alert çıkmalı.)

Burada webpack ile derlediğimiz bir modül üzerinden dünyaya merhaba dedik. (Bir programlama klasiği olarak)

Şimdi gelin React ve Css modules ile bir merhaba daha diyelim :)

React ve ReactDOM dan bu yazıda bahsetmeyeceğim. Sadece bir modül olarak nasıl istediğimiz klasörde çıktısını alıp webpack-dev-server ile çalıştıracağımızın bir örneğini yapıp bırakacağım. Bu örnekte şu paketlerden faydalanacağım:

1. react
2. react-dom
3. postcss-loader
4. autoprefixer
5. css-loader
6. sass-loader
7. babel-loader
  - @babel/core
  - @babel/preset-env
  - @babel/preset-react
8. node-sass
9. style-loader

Bu yapacağım örnekte modülün aynı zamanda bir sass dosyası olacak, bunu sırasıyla sass-loader, sonra css-loader (css modules ile birlikte) en son da html içine inline olarak basılması için style-loader üzerinden geçireceğim.

Önce bu modüllerin ve loader ların kurulumunu yapalım:

`yarn add --dev react react-dom postcss-loader autoprefixer css-loader sass-loader babel-loader @babel/core @babel/preset-env @babel/preset-react node-sass style-loader`

### Babel ve babel-loader

Babel bir transpiler olarak geçiyor. Görevi, modern javascripti günümüzün tarayıcılarının anlayacağı seviyeye indirgemek. Babel konfigürasyonu için (babel'ın hangi standartlara göre çevrim yapacağı "preset" adıyla geçiyor.)

`.babelrc` dosyasında şu ifadeleri yazıyorum:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Böylece babel-loader, react içindeki jsx ifadelerini yorumlayabilir hale geliyor.

### Postcss ve autoprefixer

Postcss i css üzerinde ön ek getirme (autoprefixer) çalıştırmak için kullanıyorum.

`postcss.config.js` dosyasında şu satırları yazıyorum:

```javascript
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

### package.json dosyasının son durumu
```json
{
  "name": "webpack-examples",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:anova/webpack-examples.git",
  "author": "Necat Bolpaça <necat@kreatif.net>",
  "license": "MIT",
  "scripts": {
    "example1": "webpack --config example1/webpack.config.js --mode production",
    "example1-dev": "webpack-dev-server --config example1/webpack.config.js --mode development",
    "example-react": "webpack --config example-react/webpack.config.js --mode production",
    "example-react-dev": "webpack-dev-server --config example-react/webpack.config.js --mode development"
  },
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.2.3",
    "@babel/preset-react": "^7.0.0",
    "autoprefixer": "^9.4.3",
    "babel-loader": "^8.0.4",
    "clean-webpack-plugin": "^1.0.0",
    "css-loader": "^2.1.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.11.0",
    "postcss-loader": "^3.0.0",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.28.3",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.14"
  }
}
```

### example-react/webpack.config.js dosyasının son durumu:
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  'entry': path.resolve(__dirname, 'src/index.js'),
  'output': {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[hash:5].js"
  },
  'plugins': [
    new HtmlWebpackPlugin({
      title: "React Example",
      template: path.resolve(__dirname, 'src/templates/react-app.html'),
      filename: "index.html",
      output: path.resolve(__dirname, 'dist'),
    }),
    new CleanWebpackPlugin(
      path.resolve(__dirname, 'dist')
    )
  ],
  module: {
    "rules": [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        loader: [
          "style-loader",
          // https://github.com/css-modules/webpack-demo/blob/master/webpack.config.js
          "css-loader?modules&importLoaders=true&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
          "sass-loader"
        ],
      }
    ]
  } 
}
```

Örneklerin tamamına buradan: [webpack example][webpack-examples] ulaşabilirsiniz.

[webpack-examples]: https://github.com/anova/webpack-examples