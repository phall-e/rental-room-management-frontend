<template>
    <el-tabs
        v-model="currentTab"
    >
        <el-tab-pane
            key="floor"
            :label="$t('menu.floor')"
            name="floor"
        >
            <AdminFloorPage/>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
    const currentTab = ref<string>('floor');
    const breadcrum = useBreadcrumbStore();

     const breadcrumbs = ['menu.master_data', 'menu.setting'];
     breadcrum.setBreadcrumbs(breadcrumbs);
     breadcrum.setPageTitle('menu.setting');
</script>