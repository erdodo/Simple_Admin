<template>
  <el-scrollbar>
    <el-container :class="getSettings.container" class="position-relative" style="min-height: 100vh">
      <div class="position-absolute d-flex justify-content-center text-center" style="top: 60px">
        <el-button plain @click="(menu_state = !menu_state), (nots_state = false)"
          >Menu <i class="ms-2 bi bi-menu-button-wide"></i>
        </el-button>
      </div>
      <div class="position-absolute d-flex justify-content-center text-center" style="top: 60px; right: 12px">
        <el-button plain @click="(nots_state = !nots_state), (menu_state = false)"
          >Nots <i class="ms-2 bi bi-view-list"></i>
        </el-button>
      </div>
      <el-header>
        <Header></Header>
      </el-header>

      <el-container class="mt-5">
        <el-aside v-if="menu_state" width="260px" style="z-index: 4" class="mt-2 position-absolute">
          <el-scrollbar class="h-100"><Aside></Aside> </el-scrollbar>
        </el-aside>
        <el-main class="px-0">
          <el-scrollbar class="px-0">
            <div :class="getSettings.container" class="">
              <router-view></router-view>
            </div>
          </el-scrollbar>
        </el-main>
        <el-aside
          v-if="nots_state"
          width="430px"
          style="z-index: 4; right: 12px; max-width: 90vw"
          class="mt-2 position-absolute"
        >
          <el-scrollbar class="h-100"><RightSide></RightSide> </el-scrollbar>
        </el-aside>
      </el-container>
      <el-footer> <Footer></Footer> </el-footer>
    </el-container>
  </el-scrollbar>
  <Script />
</template>

<script>
import Aside from "@/layout/aside";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import RightSide from "@/layout/right-side";
import Script from "@/views/Script.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menu_state: false,
      nots_state: false,
    };
  },
  computed: {
    ...mapGetters(["getSettings"]),
  },
  created() {
    document.addEventListener("click", (e) => {
      e.path.find((p) => {
        if (p.classList != undefined) {
          if (Object.values(p.classList).find((c) => c == "el-main")) {
            this.menu_state = false;
          }
        }
      });
    });
    document.addEventListener("touchend", (e) => {
      console.log(e);
      e.path.find((p) => {
        if (p.classList != undefined) {
          if (Object.values(p.classList).find((c) => c == "el-main")) {
            this.menu_state = false;
          }
        }
      });
    });
  },

  mounted() {},
  methods: {
    notifyMe() {
      if (!Notification) {
        alert("Lütfen Chrome, Firefox, Opera, Internet Explorer veya Spartan'ın güncel bir versiyonunu kullanınız...");
        return;
      }

      if (Notification.permission !== "granted") Notification.requestPermission();

      var notification = new Notification("Hoşgeldiniz!", {
        icon: "http://www.karayeltasarim.com/Resim/Upload/miniworld635620976047761956.png",
        body: "Bizimle iletişime geçmek için tıklayın!",
      });

      notification.onclick = function () {
        window.open("http://www.karayeltasarim.com/tr/iletisim.html");
      };
    },
  },
  components: {
    Aside,
    Header,
    Footer,
    RightSide,
    Script,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.header-buttons {
  width: 230px;
}
@media screen and (max-width: 480px) {
  .header-buttons {
    width: auto;
  }
}
</style>
