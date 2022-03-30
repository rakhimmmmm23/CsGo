<template>
  <div class="cases-bg">
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
        <router-link to="/" href="#" class="allcases">
          <img src="../assets/img/cases/left.svg" alt="" />
          all cases
        </router-link>
        <section class="standart">
          <div class="standart-p1">
            <div class="standart-p1-title">black standart</div>
            <div class="standart-p1-img">
              <img
                src="../assets/img/cases/bigcase.png"
                alt=""
                style="width: 450px; height: 350px"
              />
            </div>
          </div>
          <div class="standart-p2">
            <div class="opening-num-title">Select the number of openings</div>
            <div class="count-flex">
              <div
                class="opening-span"
                v-for="(counteOpening, index) in openingCount"
                :key="index"
                :class="{ caseactive: index == selectedIndex }"
                @click="selectTab(index)"
                style="margin-top: 20px"
              >
                {{ counteOpening.num }}
              </div>
            </div>
            <router-link to="/notfound"
              ><button class="opening-btn">Открыть</button></router-link
            >
          </div>
        </section>
      </div>
    </header>
    <section class="case-content">
      <div class="case-content-container">
        <div class="case-content-title">
          case content <span class="hmitems">11 items</span>
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
              style="margin-left: 105px"
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
      openingCount: [
        {
          num: 1,
        },
        {
          num: 2,
        },
        {
          num: 3,
        },
        {
          num: 4,
        },
        {
          num: 5,
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

<style scoped src="../assets/css/cases.css">
</style> 