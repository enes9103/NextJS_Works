1. yarn create next-app or
pnpm create next-app

npx create-next-app mynextapp --use-npm

npm run dev

2. index.js "Parsing error: Cannot find module 'next/babel' Require stack:" hatası için :

Create file called .babelrc in your root directory and add this code:
        {
        "presets": ["next/babel"],
        "plugins": []
        }
And in .eslintrc, replace the existing code with:
        {
        "extends": ["next/babel","next/core-web-vitals"]
        }
3. Router yapısı yok. Onun yerine pages klasörü altında oluşturulan js dosyaları birer sayfa olarak url de görünebilir. 
örneğin http://localhost:3000/about
about js dosyası oluşturup içine başlık attık. Ve url e /about yazdığımızda sayfa olarak görüntülendi.

4. Header tagı her sayfada oluşturulabilir. ve html sayfasındaki gibi Header yapısı kurulabilir. Yani her sayfa için ayrı ayrı birer site gibi muamele yapılabilir.

## STYLE İŞLEMLERİ
1. Build in support --> CSS VE SASS/SCSS dosyaları için.
CSS in JS (styled-jsx)

2. Tüm sayfaları etkileyen styles klasörü içindeki global.css dosyasıdır.
Bu global css tek bir yerde import edilebilir o da _app.js dosyasıdır. Başka bir yerde import etmiyoruz

3. Pages klasörü altındaki bir dosyaya css ile style vermek için o dosyanın component ismine göre styles klasörü altında bir css dosyası oluşturuyoruz. örneğin:
index.js dosyası içindeki Home componenti için style işlemi styles klasörü altında Home.modules.css dosyasıyla style yapılıyor.
Ve index.js dosyasında ise bu css dosyasını import ediyoruz. örneğimizdeki gibi 
import styles from '../styles/Home.module.css'
şeklinde import ediyoruz.

Bu css dosyasında style vermek için clasName = {styles.container}
şeklinde verilmelidir.
(module.css mantığı unic class name verir)

5. İnternal css
dosyas içerisinde internal css vermek için 
        <style jsx>
                .greenColor{
                        color: green;
                }
        <style>        
şeklinde kullanabiliriz.
..........................................

5. Çoklu kullanım gerektiren componentlar için ana dizinde (pages sayfası dışında)
bir components klasörü oluşturup componentları bu klasör altında oluşturuyoruz.

6. dosyalar oluştururken pages (sayfa) dosyalarının ismi küçük harfle about.js gibi,
componentslerin iismleri ise büyük harfle Layout.js gibi oluşturulur.

7. _app.js dosyasında oluşturduğumuz bir componenti import edip kullanabiliriz.
Bu Layout componentinin tüm sayfalarda görünmesini sağlamak içiin _app.js dosyasındaki 
        <Component {...pageProps} />
kodunu Layout ile sarmalladık.
    <Layout>
      <Component {...pageProps} />
    </Layout>

ardından Layout içinde Layout fonksiyonuna props olarak {children} verdik.

8. Nav.js componenti oluşturduk. Navbar yapmaya başladık.
Menü isimleri için ul altında li ler oluşturduk. ve react ta react router dom dan linkleri kullandığımız gibi burada da Link leri import ediyoruz. ama next/link ten
import Link from 'next/link';     şeklinde.
