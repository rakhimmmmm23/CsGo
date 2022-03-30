<template>
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
          <router-link to="/notfound" class="deposit-btn">deposit</router-link>
          <div class="interface">
            <img src="../assets/img/main/sound.svg" alt="" class="sound" />
            <a href="#" class="lang">RU</a>
          </div>
        </div>
      </div>
    </div>
    <section class="cases">
      <div class="cases-flex">
        <div class="tabs-flex">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ activetab: index == selectedIndex }"
            @click="selectTab(index)"
            style="margin-top: 20px"
            class="tab"
          >
            <img :src="tab.img" />
          </div>
        </div>

        <div class="swiper-container" style="margin-left: 15px">
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :slidesPerGroup="3"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            class="mySwiper w-1/4"
          >
            <swiper-slide
              v-for="(item, index) in 1"
              :key="index"
              class="guns"
              style="margin-left: 155px"
            >
              <div
                v-for="(gun, index) in guns"
                :key="index"
                style="margin-left: 15px"
              >
                <img
                  :src="gun.img"
                  alt=""
                  style="border-radius: 30px; cursor: pointer"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </header>
  <div class="open">
    <div class="open-container">
      <div class="open-flex">
        <div class="ak-img">
          <img
            src="../assets/img/main/casewithak.png"
            alt=""
            style="width: 400px; height: 400px"
          />
        </div>
        <div class="open-second">
          <div class="bonus-title">20% bonus on first deposit</div>
          <div class="open-main">CS: GO cases that you want to open</div>
          <div class="open-subtitle">
            with the highest probability of dropping fatty items
          </div>
          <a
            class="steam"
            href="https://store.steampowered.com/"
            target="_blank"
          >
            <img
              src="../assets/img/main/tick.svg"
              alt=""
              style="margin-right: 10px"
            />
            login on steam
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="state">
    <div class="state-container">
      <div class="state-flex">
        <div class="state-bonus">20% <span>bonus on first deposit</span></div>
        <div class="state-cases">
          86.7 k <span>cases opened in the last month</span>
        </div>
        <div class="state-cases">
          13.5 k <span>new users in the last month</span>
        </div>
        <div class="state-cases">934 <span>users online on the site</span></div>
      </div>
    </div>
  </div>
  <div class="free">
    <div class="free-container">
      <div class="free-flex">
        <div class="free-text">
          <div class="free-title">free case</div>
          <div class="free-subtitle">
            Register on our service and receive a free case upon the first
            replenishment of the balance
          </div>
        </div>
        <img src="../assets/img/main/freecase.png" alt="" />
        <router-link to="/notfound" class="free-btn"
          >get a free case</router-link
        >
      </div>
    </div>
  </div>
  <div class="offer">
    <div class="offer-container">
      <div class="offer">
        <div class="offer-p1-title">we offer the best conditions</div>
        <div class="p1-text">
          <div class="p1-text-title">Full transparency</div>
          <div class="p-text-subtitle">
            We do not hide the stocks of our bots or their deals. On the
            contrary we have a live broadcast of the winnings where the results
            of the openings are shown in real time and in the telegram we
            regularly publish posts with the winnings.
          </div>
        </div>
        <div class="p1-text">
          <div class="p1-text-title">Guaranteed delivery</div>
          <div class="p-text-subtitle">
            We always give out won skins and we do it very quickly. Our
            technical support is ready to resolve the problem at any time.
          </div>
        </div>
      </div>
      <div class="offer">
        <div class="offer-sticker">
          <img src="../assets/img/main/stickers.png" alt="" />
        </div>
        <div class="p1-text">
          <div class="p1-text-title">Skins calculation</div>
          <div class="p-text-subtitle">
            To top up an account with us, you do not have to deposit real money.
            We accept the calculation in skins, which means it is easy to
            replenish the account with unnecessary junk
          </div>
        </div>
        <div class="p1-text">
          <div class="p1-text-title">Low prices</div>
          <div class="p-text-subtitle">
            Our cases are cheaper than on Steam, and the loot in them is cooler.
            It is possible to sell the won skins to us and it is much more
            profitable than on the trading platform
          </div>
        </div>
      </div>
      <div class="free">
        <div class="free-container">
          <div class="free-flex">
            <div class="free-text">
              <div class="free-title">promo codes</div>
              <div class="free-subtitle">
                are published daily in our telegram channel. Subscribe to keep
                abreast of the latest updates
              </div>
            </div>
            <img src="../assets/img/main/sale.png" alt="" />
            <router-link to="/notfound" class="free-btn">
              {{ subscribe }} to us
            </router-link>
          </div>
        </div>
      </div>
      <div class="payments">
        <div class="payments-container">
          <div class="payments-flex">
            <img
              src="../assets/img/main/webmoney.png"
              alt=""
              class="paymnet-img"
            />
            <img
              src="../assets/img/main/skrill.png"
              alt=""
              class="paymnet-img"
            />
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
              <router-link to="/notfound" class="fp1-link" href="#"
                >terms of use</router-link
              >
              <router-link to="/notfound" class="fp1-link" href="#"
                >privacy policy</router-link
              >
              <router-link to="/notfound" class="fp1-link" href="#"
                >contacts</router-link
              >
              <router-link to="/notfound" class="fp1-link" href="#"
                >faq</router-link
              >
            </div>
          </div>
          <div class="fp2">
            <div class="dog-title">
              © casebits – CS: GO cases that you want to open
            </div>
            <div class="fp2-text">
              The copyright holder of the inventory objects is Valve
              Corporation. All included here mentioned brand names are
              registered and property of the respective companies. The right to
              participate in a promotional event for the drawing of a unique
              digital product, presented in the form of a limited personal
              non-transferable revocable exclusive license, without the right to
              sublicense, for the use of digital objects, is guaranteed to every
              user who has purchased goods in the amount of $1 or more. Terms of
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div></div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selectedIndex: 0,
      subscribe: "Subscribe",
      tabs: [
        {
          img: require("@/assets/img/main/favorite.svg"),
        },
        {
          img: require("@/assets/img/main/history.svg"),
        },
        {
          img: require("@/assets/img/main/like.svg"),
        },
      ],
      guns: [
        {
          img: require("@/assets/img/main/block-1.jpg"),
        },
        {
          img: require("@/assets/img/main/block-2.jpg"),
        },
        {
          img: require("@/assets/img/main/block-3.jpg"),
        },
        {
          img: require("@/assets/img/main/block-4.jpg"),
        },
        {
          img: require("@/assets/img/main/block-5.jpg"),
        },
        {
          img: require("@/assets/img/main/block-6.jpg"),
        },
        {
          img: require("@/assets/img/main/block-7.jpg"),
        },
        {
          img: require("@/assets/img/main/block-8.jpg"),
        },
      ],
    };
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i;
    },
  },
};
</script>


<style src="../assets/css/main.css" >
</style>
