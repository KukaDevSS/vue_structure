<template>
    <div class="dropdown">
      <button class="btn dropdown-toggle my-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
        <img :src="getFlag(currentLanguage)" alt="flag" class="flag-icon" />
        {{ currentLanguage }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li v-for="language in languages" :key="language.code">
          <a class="dropdown-item" href="#" @click="changeLanguage(language.code)">
            <img :src="getFlag(language.code)" alt="flag" class="flag-icon" />
            {{ language.name }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentLanguage = ref('la');
  const languages = ref([
    { code: 'la', name: 'Laos' },
    { code: 'en', name: 'English' },
    { code: 'vn', name: 'Vietnam' },
  ]);
  
  function changeLanguage(code) {
    currentLanguage.value = code;
  }
  
  function getFlag(code) {
    const flags = {
      la: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
      en: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg',
      vn: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
    };
    return flags[code];
  }
  </script>
  
  <style scoped>
  .flag-icon {
    width: 20px;
    height: 14px;
    margin-right: 8px;
  }
  .btn {
    background-color: transparent;
    border: navy solid 1px;

  }
  </style>
  