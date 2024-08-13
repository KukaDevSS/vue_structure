<template>
    <div>
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <Sidebar class="col-md-3 col-lg-2" />
          <main class="col-md-9 mx-auto col-lg-10 m-0">
            <router-view />
          </main>
        </div>
      </div>
      <Footer />
    </div>
</template>
  
<script setup>
  import Navbar from '@/components/common/Navbar.vue';
  import Sidebar from '@/components/common/Sidebar.vue';
  import Footer from '@/components/common/Footer.vue';
</script>
  