<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/tables/columns/' + this.$route.params.table_name + '/list' }">{{
      this.$route.params.table_name
    }}</el-breadcrumb-item>
    <el-breadcrumb-item>Create</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <div class="mb-1">
        <span>Kolon adı: </span>
        <el-input v-model="data['name']" placeholder="Kolon adı"></el-input>
      </div>
      <div class="mb-1">
        <span>Görüntüleme ismi: </span>
        <el-input v-model="data['comment']" placeholder="Görüntüleme ismi"></el-input>
      </div>
      <div class="mb-1">
        <span>Kolon tipi: </span>
        <el-select v-model="data['type']" placeholder="Kolon tipi" class="w-100">
          <el-option value="varchar" label="Kısa Yazı" />
          <el-option value="text" label="Uzun Yazı" />
          <el-option value="int" label="Sayı" />
          <el-option value="tinyint" label="Boolean" />
          <el-option value="tinytext" label="Resim" />
          <el-option value="date" label="Tarih" />
          <el-option value="time" label="Saat" />
          <el-option value="datetime" label="Tarih-Saat" />
        </el-select>
      </div>
      <div class="mb-1">
        <span>Max uzunluk: </span>
        <el-input type="number" v-model="data['constraint']" placeholder="Max uzunluk"></el-input>
      </div>
      <div class="mb-1">
        <span>Sadece pozitif değer: </span>

        <el-select v-model="data['unsigned']" placeholder="Sadece pozitif değer" class="w-100">
          <el-option value="TRUE" label="Evet" />
          <el-option value="FALSE" label="Hayır" />
        </el-select>
      </div>
      <div class="mb-1">
        <span>Otomatik artan: </span>

        <el-select v-model="data['auto_increment']" placeholder="Otomatik artan" class="w-100">
          <el-option value="TRUE" label="Evet" />
          <el-option value="FALSE" label="Hayır" />
        </el-select>
      </div>
      <div class="mb-1">
        <span>Benzersiz: </span>

        <el-select v-model="data['unique']" placeholder="Benzersiz" class="w-100">
          <el-option value="TRUE" label="Evet" />
          <el-option value="FALSE" label="Hayır" />
        </el-select>
      </div>
      <div class="mb-1">
        <span>Boş: </span>

        <el-select v-model="data['null']" placeholder="Boş" class="w-100">
          <el-option value="TRUE" label="Evet" />
          <el-option value="FALSE" label="Hayır" />
        </el-select>
      </div>
      <div class="mb-1">
        <span>Varsayılan: </span>
        <el-input v-model="data['default']" placeholder="Varsayılan"></el-input>
      </div>
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
      data: {
        name: "",
        type: "varchar",
        constraint: "5",
        unsigned: "FALSE",
        auto_increment: "FALSE",
        unique: "FALSE",
        null: "FALSE",
        default: "",
        comment: "",
      },
    };
  },
  mounted() {
    this.columns = {};
  },
  methods: {
    save() {
      services
        .addColumn(this.$route.params.table_name, JSON.stringify(this.data))
        .then((res) => {
          if (res.data.status == "success") {
            ElNotification({
              title: "Success",
              message: "Created",
              type: "success",
            });
          } else {
          }
          //this.$router.push("/tables/datas/" + this.$route.params.table_name + "/list");
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            dangerouslyUseHTMLString: true,
            message: err.message,
            type: "error",
          });
        });
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
