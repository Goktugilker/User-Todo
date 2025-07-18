<script setup lang="ts">
useHead({
  title: 'Todo List',
})
// app.config.ts ekledim gerekli tasarım düzenlemelerini orada global olarak gerçekleştir
// ui kütüphanesi kullanma sebebimiz işleri hızlandırmak bu yüzden tasarımsal olarak çok fazla değişiklik yapma
// isDark önceden fonksiyon olarak tanımlanmıştı bu yüzden isDark() şeklinde kullanılıyordu artık direkt değişken olarak kullanıyoruz
// [id] sayfasında definePageMeta ile sayfa ismini belirledik
// sayfaları direkt componentte tutmana gerek yok sayfa bütün olarak bir component değildir sadece componentlerin bir araya geldiği bir yapıdır

</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
