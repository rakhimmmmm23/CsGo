<template>
  <div class="cards-bg">
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
            <router-link to="/notfound" class="deposit-btn"
              >deposit</router-link
            >
            <div class="interface">
              <img src="../assets/img/main/sound.svg" alt="" class="sound" />
              <a href="#" class="lang">RU</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="about-pistol">
      <div class="about-pistol-container">
        <div class="flex-for-map">
          <img src="../assets/img/cases/maps.png" alt="" />
        </div>
        <div class="pistol-img">
          <img src="../assets/img/cases/fiveseven.png" alt="" />
        </div>
        <div class="piston-title">Five-SeveN | Coolant</div>
      </div>
    </section>
    <section class="sell">
      <div class="sell-container">
        <div class="sell-flex">
          <button class="deposit-btn">Продать</button>
          <button class="again">
            <img src="../assets/img/cases/return.svg" alt="" />
            Попробовать ещё раз
          </button>
        </div>
        <div class="voskl">
          <img src="../assets/img/cases/voskl.svg" alt="" />
          Предмет отображается в вашем
          <router-link to="/notfound">
            <span>личном кабинете</span>
          </router-link>
        </div>
      </div>
    </section>
    <div class="payments">
      <div class="payments-container">
        <div class="payments-flex">
          <img
            src="../assets/img/main/webmoney.png"
            alt=""
            class="paymnet-img"
          />
          <img src="../assets/img/main/skrill.png" alt="" class="paymnet-img" />
          <img src="../assets/img/main/visa.png" alt="" class="paymnet-img" />
          <img
            src="../assets/img/main/ecopayz.png"
            alt=""
            class="paymnet-img"
          />
          <img
            src="../assets/img/main/mastercard.png"
            alt=""
            class="paymnet-img"
          />
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-container">
        <div class="fp1">
          <div class="big-logo">
            <img src="../assets/img/main/biglogo.png" alt="" />
          </div>
          <div class="fp1-nav">
            <a class="fp1-link" href="#">terms of use</a>
            <a class="fp1-link" href="#">privacy policy</a>
            <a class="fp1-link" href="#">contacts</a>
            <a class="fp1-link" href="#">faq</a>
          </div>
        </div>
        <div class="fp2">
          <div class="dog-title">
            © casebits – CS: GO cases that you want to open
          </div>
          <div class="fp2-text">
            The copyright holder of the inventory objects is Valve Corporation.
            All included here mentioned brand names are registered and property
            of the respective companies. The right to participate
            in a promotional event for the drawing of a unique digital product,
            presented in the form of a limited personal non-transferable
            revocable exclusive license, without the right to sublicense, for
            the use of digital objects, is guaranteed to every user who has
            purchased goods in the amount of $1 or more. Terms of
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style src="../assets/css/cards.css">
</style>