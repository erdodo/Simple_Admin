<template>
  <el-card>
    <el-menu :default-openeds="['/auths']" :default-active="$route.fullPath" class="h-100 border-end-0" router>
      <!--todo Kullanıcılar -->
      <el-sub-menu index="/users">
        <template #title>
          <div class="text-start"><i class="bi bi-people fs-4 me-2"></i> Users</div>
        </template>
        <el-menu-item index="/users/list"><i class="bi bi-list-ol me-2"></i>List</el-menu-item>
        <el-menu-item index="/users/create"><i class="bi bi-plus me-2"></i>Create</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/market">
        <template #title>
          <div class="text-start"><i class="bi bi-shop fs-4 me-2"></i> Satın Alma</div>
        </template>

        <el-menu-item index="/market/list"><i class="bi bi-box-seam me-2"></i>Ürünler</el-menu-item>
        <el-menu-item index="/market-islemler/list"><i class="bi bi-file-ruled me-2"></i>Market İşlemler</el-menu-item>
      </el-sub-menu>
      <!--todo Tablolar  listelenecek -->
      <el-sub-menu index="/tables">
        <template #title>
          <div class="text-start"><i class="bi bi-table fs-4 me-2"></i> Tables</div>
        </template>
        <el-menu-item index="/tables/list"><i class="bi bi-list-ol me-2"></i>List</el-menu-item>
        <el-menu-item index="/tables/create"><i class="bi bi-plus me-2"></i>Create</el-menu-item>
      </el-sub-menu>
      <!--todo Yetkilendirmeler listelenecek -->
      <el-sub-menu index="/auths">
        <template #title>
          <div>
            <el-icon><i class="bi bi-sign-stop-lights fs-4 me-2"></i></el-icon>Authorization
          </div>
        </template>
        <el-sub-menu index="/auths/tables-group">
          <template #title>
            <div class="text-start"><i class="bi bi-table me-2"></i> Tables Group</div>
          </template>
          <el-menu-item index="/auths/tables-group/list"><i class="bi bi-list-ol me-2"></i>List</el-menu-item>
          <el-menu-item index="/auths/tables-group/create"><i class="bi bi-plus me-2"></i>Create</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/auths/authority-groups">
          <template #title>
            <div class="text-start"><i class="bi bi-file-lock me-2"></i> Authority Groups</div>
          </template>
          <el-menu-item index="/auths/authority-groups/list"><i class="bi bi-list-ol me-2"></i>List</el-menu-item>
          <el-menu-item index="/auths/authority-groups/create"><i class="bi bi-plus me-2"></i>Create</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <!--todo Profil -->
      <el-sub-menu index="/profile">
        <template #title>
          <div class="text-start"><i class="bi bi-person fs-4 me-2"></i> Profile</div>
        </template>
        <el-menu-item index="/profile/edit"><i class="bi bi-pen me-2"></i>Edit</el-menu-item>
        <el-menu-item index="/profile/settings"><i class="bi bi-sliders me-2"></i>Settings</el-menu-item>
        <el-menu-item index="/profile/privacy-and-security"
          ><i class="bi bi-shield-check me-2"></i>Privacy and Security</el-menu-item
        >
        <el-menu-item index="/profile/log-out" class="text-danger"
          ><i class="bi bi-box-arrow-left me-2"></i>Log Out</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item index="/settings"><i class="bi bi-gear me-2"></i>Settings</el-menu-item>
    </el-menu>
  </el-card>
</template>

<script>
export default {};
</script>

<style></style>
