<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <Inputs v-for="column in columns" :key="column" :column="column" v-model="data[column.name]"></Inputs>
    </div>
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <div class="d-flex justify-content-end">
        <el-button type="primary" plain @click="save()">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Inputs from "@/components/Inputs";
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      columns: {},
      data: {},
    };
  },
  mounted() {
    services.edit("users", "1").then((res) => {
      this.columns = res.data.columns;
      this.data = res.data.data;
    });
  },
  methods: {
    save() {
      services.update("users", this.data.id, this.data).then(() => {
        ElNotification({
          title: "Success",
          message: "Updated",
          type: "success",
        });
        this.$router.push("/users/list");
      });
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
