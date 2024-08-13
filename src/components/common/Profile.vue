<template>
    <div class="avatar-profile">
      <div class="dropdown">
        <button
          class="btn dropdown-toggle d-flex align-items-center mt-1"
          type="button"
          id="avatarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img :src="avatarUrl" alt="Avatar" class="avatar-img me-2" />
          <!-- {{ userName }} -->
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-person-circle me-2"></i>Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-gear me-2"></i>Settings
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-box-arrow-right me-2"></i>Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const avatarUrl = ref('https://via.placeholder.com/40');
  const userName = ref('John Doe');

</script>
  
<style scoped>
.avatar-img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.btn {
    background-color: transparent;
    border: navy solid 1px;

  }
</style>
  