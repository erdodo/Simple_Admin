<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/' }">Auths</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/authority-groups/list' }">Authority Groups</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/authority-groups/auths/' + this.$route.params.auths_id + '/list' }"
      >Auths</el-breadcrumb-item
    >
    <el-breadcrumb-item>Edit</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div v-if="create_active" class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <template v-for="column in columns" :key="column">
        <div v-if="column.name == 'list_hide'" class="mt-2">
          Liste gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'get_hide'" class="mt-2">
          Detay gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'create_hide'" class="mt-2">
          Ekle gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'edit_hide'" class="mt-2">
          Düzenle gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <Inputs v-else :column="column" v-model="data[column.name]"></Inputs>
      </template>
      <div class="d-flex justify-content-end my-3">
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
      table_columns: {},
      create_active: false,
    };
  },
  mounted() {
    this.getData();
  },
  //NOTE - SON DAKKADA SIÇTI ROUTEDE İKİ TANE İD OLDUĞU İÇİN PATLIYOR O YÜZDEN EDİT SAÇMALIYOR
  methods: {
    getData() {
      services.edit("auths", this.$route.params.id).then((res) => {
        services.getAuths(res.data.data.table_name, this.$route.params.auths_id).then((res) => {
          this.columns = res.data.columns;
          this.table_columns = res.data.table_columns;
          this.create_active = true;
          let data = res.data.data;
          for (const [key, val] of Object.entries(data)) {
            if (key == "list_hide" || key == "get_hide" || key == "create_hide" || key == "edit_hide") {
              this.data[key] = val.split(",");
            } else {
              this.data[key] = val;
            }
          }
        });
      });
    },
    save() {
      for (const [key, val] of Object.entries(this.data)) {
        if (key == "list_hide" || key == "get_hide" || key == "create_hide" || key == "edit_hide") {
          this.data[key] = val.join();
        } else {
          this.data[key] = val;
        }
      }
      services.update("auths", this.$route.params.id, this.data).then(() => {
        ElNotification({
          title: "Success",
          message: "Updated",
          type: "success",
        });
        this.$router.push("/auths/authority-groups/auths/" + this.$route.params.auths_id + "/list");
      });
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
