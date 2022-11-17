<template>
  <div>
    <button type="submit" class="iyzico-button" @click="odeme()">ÖDE</button>
    <iframe
      src="http://localhost:8888/iyzipay/odeme-formu.php?token=2&id=1"
      height="400px"
      class="w-100"
      frameborder="0"
    ></iframe>
    <div v-html="html"></div>
    <input type="text" v-model="sorgutoken" />
    <button @click="sorgu">Sorgu</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      html: "",
      odeme_link: "",
      sorgutoken: "",
    };
  },
  methods: {
    sorgu() {
      axios.get("http://localhost:8888/iyzipay/odeme-sorgu.php?token=" + this.sorgutoken);
    },
    odeme() {
      axios.get("http://localhost:8888/iyzipay/odeme-formu.php?token=2&id=1").then((res) => {
        //this.odeme_link = res.data;
        this.html = res.data;
      });
    },
  },
};
</script>

<style>
.col-xs-3 .logo {
  display: none;
}
</style>
