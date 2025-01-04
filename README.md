1)App altında ilk render edilmesini istediğimiz sayfayı yazıyoruz
2)Sarmalama Yapmak için layout oluşturuyoruz
3)Statik ve dinamik rotler var Statikte url değişmiyor dinamikte url değişiyor
4)Componentin adının page olması zorunlu nextjs böyle isitiyor 
5)Statik sayfalar dinamikle aynı seviyede ise ilk önce statik render edilir 
6)Routeler arasında urlden ellede gidebiliriz bir linke basıpta gidebiliriz 
7)Layout demek her sayfada hedaer ve footer vardır.Ortaya bir children koy ve amaç ortadaki 
alanın değişmesidir
8)Layout sayfada bir kere render ediliyor 
9)Her sayfa kendi içinde layout yapılarına sahip olabilir 
10)Nextjs en dışta bir layout rander etmemizi isitior.Yani rootlayout şart 
11)App directory altında error ve loading oluşturabiliyoruz
12)App directory altında olan herşey servercomponnent yani serverda render ediliyor
13)Bir servercomponenti clientComğonent yapmak isitiyorsak "use client yazıyoruz" 
14) Headerin benim sayfama konulması işlemine rendering deniyor
15)ClientSide rendering son kullanıcın bilgisayarında render oluyor demektir
16)ServerSide rendering ise serverda render ediliyor daha sonra benim bilgisayaraıma gönderiliyor demektir
17)Ben gidiyorum adamların serverına o jsyi alıyorum daha sonra kendi browserımda işliyorum Sonra render ediyorum bu clientSide renderin
demek
18)ServerSide rendering ise server kendi sunucusunda işliyor ve html döndürüyor bana sadce
19)ClientSide rendering ise browser kendi sunucusunda işliyor ve html döndürüyor bana ve olayı client tarafında gösteriyor
20 ) google ClientSide döne resposa bakıyor sadece htm dönüyor bundan dolayı indexleyemiyor seo optimizasyonu yoktur
21) Js compile etmek browser için bir maliyet 
22)Server kullanıcı pcden daha hzılıdır  çünkü benim makinem yavaşsa clientta js daha geç compiler ederim ve geç yansıtırım
23)Js açıp compile edip siteye koymaktansa direk servarda render edilip bize html dönmesi daha az maliyetlidir 
24)App klasörünün içerisine ne koyarsan koy serverda render edilir 
25)Appin altında her klasör serverda render ediliyor
26)App içerisinde import ettiğimiz herşey serverside render ediliyor
27)Son kullanıcın makinesinde render edilmesine clientside rendering denir
28)Usestate ve useeffect clientSiderenderingte kullanılabilecek hooklar