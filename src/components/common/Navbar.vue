<template>
    <nav class="navbar navbar-expand-lg bg-white border p-0">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold mx-4 text-secondary" href="#"><img src="https://prium.github.io/phoenix/v1.18.1/assets/img/icons/logo.png" height="30" alt=""> DASHBOARD</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <LanguageDropdown />
            </li>
            <li class="nav-item">
              <AvatarProfile />
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import LanguageDropdown from '../common/LanguageDropdown.vue'
import AvatarProfile from '../common/Profile.vue'

</script>

<style scoped>

</style>
  