<template>
  <div class="toggleWrapper">
    <input type="checkbox" v-model="theme" @change="changeTheme()" class="dn" id="dn" />
    <label for="dn" class="toggle">
      <span class="toggle__handler">
        <span class="crater crater--1"></span>
        <span class="crater crater--2"></span>
        <span class="crater crater--3"></span>
      </span>
      <span class="star star--1"></span>
      <span class="star star--2"></span>
      <span class="star star--3"></span>
      <span class="star star--4"></span>
      <span class="star star--5"></span>
      <span class="star star--6"></span>
    </label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      theme: false,
    };
  },
  computed: {
    ...mapGetters(["getSettings"]),
  },
  mounted() {
    this.theme = this.getSettings?.theme == "dark";
  },
  methods: {
    changeTheme() {
      if (this.theme) {
        document.getElementsByTagName("html")[0].classList.add("dark");
        document.getElementsByTagName("html")[0].classList.remove("light");
        this.$store.commit("setSettings", { key: "theme", val: "dark" });
      } else {
        document.getElementsByTagName("html")[0].classList.remove("dark");
        document.getElementsByTagName("html")[0].classList.add("light");
        this.$store.commit("setSettings", { key: "theme", val: "light" });
      }
    },
  },
  watch: {
    getSettings() {
      this.theme = this.getSettings.theme == "dark";
    },
  },
};
</script>

<style>
.toggleWrapper {
}
.toggleWrapper input {
  position: absolute;
  left: -99em;
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 70px;
  height: 30px;
  background-color: #83d8ff;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 23px;
  height: 23px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
}
.toggle__handler .crater {
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
}
.toggle__handler .crater--1 {
  top: 18px;
  left: 10px;
  width: 4px;
  height: 4px;
}
.toggle__handler .crater--2 {
  top: 6px;
  left: 4px;
  width: 6px;
  height: 6px;
}
.toggle__handler .crater--3 {
  top: 8px;
  left: 15px;
  width: 8px;
  height: 8px;
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 7px;
  left: 30px;
  z-index: 0;
  width: 30px;
  height: 4px;
}

.star--2 {
  top: 13px;
  left: 18px;
  z-index: 1;
  width: 30px;
  height: 4px;
}

.star--3 {
  top: 20px;
  left: 30px;
  z-index: 0;
  width: 30px;
  height: 4px;
}

.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 11px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

.star--5 {
  top: 4px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px, 0, 0);
}

.star--6 {
  top: 24px;
  left: 14px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
}

input:checked + .toggle {
  background-color: #749dd6;
}
input:checked + .toggle:before {
  color: #749ed7;
}
input:checked + .toggle:after {
  color: #ffffff;
}
input:checked + .toggle .toggle__handler {
  background-color: #ffe5b5;
  transform: translate3d(40px, 0, 0) rotate(0);
}
input:checked + .toggle .toggle__handler .crater {
  opacity: 1;
}
input:checked + .toggle .star--1 {
  width: 2px;
  height: 2px;
}
input:checked + .toggle .star--2 {
  width: 4px;
  height: 4px;
  transform: translate3d(-5px, 0, 0);
}
input:checked + .toggle .star--3 {
  width: 2px;
  height: 2px;
  transform: translate3d(-7px, 0, 0);
}
input:checked + .toggle .star--4,
input:checked + .toggle .star--5,
input:checked + .toggle .star--6 {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
input:checked + .toggle .star--4 {
  transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
input:checked + .toggle .star--5 {
  transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
input:checked + .toggle .star--6 {
  transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>
