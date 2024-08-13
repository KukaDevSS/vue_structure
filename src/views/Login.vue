<template>
    <div class="d-flex justify-content-center align-items-center h-100vh">
      <div class="container border row mx-auto h-80vh p-0 shadow rounded">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <form class="w-75 p-5">
            <h2 class="login mb-2 text-center text-uppercase">login</h2>
            <p class="welcome text-center mb-4">Welcome back! please login to your account</p>
            <div class="mb-3 input-group">
                <span class="input-group-text">
                    <img height="30" src="../assets/icons/person.png" alt="Mail Icon" class="icon"/>
                </span>
            <input type="text" class="form-control" id="username" placeholder="Enter username" />
          </div>
            <div class="mb-3 input-group">
                <span class="input-group-text">
                    <img height="30" src="../assets/icons/lock.png" alt="Mail Icon" class="icon"/>
                </span>
              <input type="password" class="form-control" id="password" placeholder="Enter password" />
            </div>
            <div class="d-flex justify-content-between mt-2 mx-3">
                <div class="">
                    <input type="checkbox" class="me-1">
                    <span class="remember">Remember me</span>
                </div>
                <p class="forgot">Forgot Password?</p>
            </div>
            <button type="submit" class="btn-login btn btn-primary w-100 mt-4">Login</button>
          </form>
        </div>
        <div class="col-md-6 d-flex bg-primary justify-content-center align-items-center rounded">
          <img height="500" src="https://www.pikpng.com/pngl/b/345-3457023_instagram-direct-message-on-computer-digital-marketing-vector.png" alt="Vector Image" class=" p-lg-5" />
        </div>
      </div>
    </div>
</template>
  
<script setup>

</script>
  
<style scoped>
  .h-100vh {
    height: 100vh;
  }
  .h-80vh {
    height: 80vh;
  }
  .login{
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
  }
  .forgot{
    font-family: 'Times New Roman', Times, serif;
    color: blue;
  }
  *{
    font-family: 'Times New Roman', Times, serif;
  }
</style>
  