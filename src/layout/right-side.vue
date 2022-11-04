<template>
  <el-card>
    <div class="d-flex flex-column mb-2" v-for="not in nots" :key="not" @click="notCheck(not)">
      <template v-if="not.status == false">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <el-checkbox v-model="not.status" size="" />
          <label class="my-0 fs-9">{{ not.updated_date }} </label>
        </div>

        <p class="fs-7" :style="not.status == true ? 'text-decoration:line-through' : ''">{{ not.content }}</p>
        <el-divider></el-divider>
      </template>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      nots: {},
      checked1: true,
    };
  },
  methods: {
    getData() {
      this.$services.list("nots").then((res) => (this.nots = res.data.data));
    },
    notCheck(not) {
      this.$services.update("nots", not.id, { status: "1" }).then(() => {
        this.getData();
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
