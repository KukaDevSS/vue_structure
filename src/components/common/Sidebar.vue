<template>
    <div class="sidebar bg-white p-3 border">
      <nav class="nav flex-column">
        <router-link class="sidebar-menu nav-link text-light d-flex justify-content-between my-1 border rounded p-2" to="/">
          <div>
            <img src="../../assets/icons/dashboard.png" height="16" alt="">
            ໜ້າຫຼັກ
          </div>
          <img src="../../assets/icons/chevron_right.png" height="16" alt="">
        </router-link>
        <router-link class="sidebar-menu nav-link text-light d-flex justify-content-between my-1 border rounded p-2" to="/list">
          <div>
            <img src="../../assets/icons/view_list.png" height="16" alt="">
            ລາຍການ
          </div>
          <img src="../../assets/icons/chevron_right.png" height="16" alt="">
        </router-link>
        <router-link class="sidebar-menu nav-link text-light d-flex justify-content-between my-1 border rounded p-2" to="/settings">
         <div>
            <img src="../../assets/icons/setting.png" height="16" alt="">
            ຕັ້ງຄ່າ
         </div>
          <img src="../../assets/icons/chevron_right.png" height="16" alt="">
        </router-link>
        <router-link class="sidebar-menu nav-link text-light d-flex justify-content-between my-1 border rounded p-2" to="/helps">
          <div>
            <img src="../../assets/icons/help.png" height="16" alt="">
            ຊ່ວຍເຫຼືອ
          </div>
          <img src="../../assets/icons/chevron_right.png" height="16" alt="">
        </router-link>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 210px;
    min-height: 100vh;
  }
  .nav-link {
    font-size: 13px;
    font-family: 'Noto sans lao', sans-serif;
  }
  .sidebar-menu {
    background-color: rgb(2, 2, 74);
  }
  </style>
  