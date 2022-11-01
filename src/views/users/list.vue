<template>
  <el-table :data="datas.data" style="width: 100%">
    <el-table-column v-for="column in datas.columns" :key="column.name" :prop="column.name" min-width="250px" width="auto">
      <template #header>
        <label class="fs-6 text-nowrap">{{ column.display }} </label>
      </template>
      <template #default="scope">
        <el-image
          v-if="column.type == 'file'"
          :src="$image_base + scope.row[column.name]"
          lazy
          fit="cover"
          style="height: 60px"
          class="rounded"
        >
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
        <el-tag type="warning" v-else-if="column.key == 'MUL' && scope.row[column.name].data != undefined">
          {{ scope.row[column.name].data }}
        </el-tag>
        <label v-else class="fs-6 ellipsis-3">{{ scope.row[column.name] }}</label>
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">Detail</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import services from "@/services";
export default {
  data() {
    return {
      datas: {},
    };
  },
  mounted() {
    services.list("users").then((res) => {
      this.datas = res.data;
    });
  },
};
</script>

<style></style>
