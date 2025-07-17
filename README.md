# Nuxt Başlangıç Görevi

Bu görevde temel Nuxt kurulum adımlarını uygulayarak, başlangıç seviyesinde ve düzenli bir proje oluşturman bekleniyor. Kodunu temiz ve anlaşılır yazmaya dikkat et.

## Görevin

Herkesin todo listesi olan bir kullanıcı listesi uygulaması geliştirmek.

---

## 1. Hazırlık

* NuxtUI dökümanlarını incele, temel componentleri gözden geçir.
* İkonlarda NuxtUI'ın `<UIcon>` componentini projende kullanacaksın.
* Projen için bir Github reposu oluştur ve koduna erişmem için bana yetki ver.
* Yaptığın her geliştirmede, açıklayıcı commit mesajları kullan (örn. "proje oluşturuldu", "todolist tablosu eklendi").
* Gerekirse küçük bir demo proje açıp pratik yapabilirsin.

---

## 2. Kurulum

* Yeni bir Nuxt projesi oluştur.
* Projene **NuxtUI**, **Pinia**, **NuxtFonts** ve **Tailwind CSS** kütüphanelerini ekle, hepsinin çalıştığını kontrol et.
* Kod standartları için **ESLint** kullan, antfu konfigürasyonunu uygula.
  Detaylar: [https://github.com/antfu/eslint-config](https://github.com/antfu/eslint-config)

---

## 3. Proje Yapısı

* **layout**, **pages**, **utils** ve **components** klasörlerini doğru şekilde kullan.
* Tüm projede TypeScript kullan.
* useHead ile temel SEO ayarı ekle (mükemmel olmasına gerek yok).
* Siten en az 2 sayfadan oluşmalı, bunlardan biri parametreyle açılan bir sayfa olmalı.
* Sitede bir **header** (minimum başlık olacak) ve bir **footer** (adını yazman yeterli) bulunmalı.
* Aydınlık ve karanlık tema seçeneği sunulmalı.
* Tüm uygulaman **responsive** (mobil ve masaüstü uyumlu) olmalı.

---

## 4. İçerik

* JSONPlaceholder API’si ile kullanıcıları çek.
* Her kullanıcının kendilerine ait todoları olmalı ve bunlar üzerinde CRUD işlemleri yapılabilmeli.
* Kullanıcıların detay sayfası olmalı ve bu sayfada todoları da bulunmalı.
* Kullanıcı ve todo listelerinde **arama ve filtreleme** fonksiyonu ekle (arama inputu veya filtreleme menüsü olabilir).
* Todo silme veya ekleme işlemlerinde **toast bildirim** göster.

---

> Gereksiz dosya, component veya karmaşıklıktan kaçın. Görev bitince kodunu teslim etmeye hazır ol.
