<template>
  <div class="header-bg">
    <header>
      <div class="header-container">
        <div class="main-flex">
          <div class="header-part1">
            <div class="nav">
              <router-link class="img-route" to="/">
                <img
                  src="../assets/img/main/logo.svg"
                  alt=""
                  style="cursor: pointer"
                />
              </router-link>
              <router-link to="/cases" class="nav-item">cases</router-link>
              <router-link href="#" class="nav-item" to="/cards"
                >cards</router-link
              >
              <router-link href="#" class="nav-item" to="/wheel"
                >wheel of luck</router-link
              >
            </div>
          </div>
          <div class="header-part2">
            <div class="account">
              <div class="name">You</div>
              <img src="../assets/img/main/account.svg" alt="" class="avatar" />
            </div>
            <div class="price">5,56 $</div>
            <button class="deposit-btn">deposit</button>
            <div class="interface">
              <img src="../assets/img/main/sound.svg" alt="" class="sound" />
              <a href="#" class="lang">RU</a>
            </div>
          </div>
        </div>
        <h1 class="four">404</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../assets/css/404.css">
</style>