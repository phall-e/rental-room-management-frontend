<template>

    <TablesMain
      module-name="building"
      :page-header-options="{
        pageTitle: 'menu.building',
        breadcrumbs: breadcrumbs
      }"
      crud-path="admin/master-data/buildings"
      :headers="headers"
      :table-options="options"
    >
      <template #form="{ formRef }">
        <AdminBuildingForm :form-ref="formRef"/>
      </template>
      <template #item.createdByUser="{ item }">
        {{ item?.createdByUser?.username }}
      </template>
      <template #item.branch="{ item }">
        {{ item?.branch[$t('name_lang')] }}
      </template>
      <template #item.createdAt="{ item }">
        {{ dateFormatter(item.createdAt) }}
      </template>
    </TablesMain>
</template>

<script setup lang="ts">
import type { Headers } from '~/types/header.type';
import type { UseCrudOption } from '~/types/UseCrudOption';

  definePageMeta({
    permissions: ['read-building'],
  });

  const breadcrumbs = ['menu.master_data', 'menu.building'];
  const headers: Headers[] = [
    {
      title: 'columns.code',
      key: 'code',
    },
    {
      title: 'menu.branch',
      key: 'branch',
    },
    {
      title: 'columns.name_en',
      key: 'nameEn',
    }, 
    {
      title: 'columns.name_kh',
      key: 'nameKh',
    },     
    {
      title: 'columns.description',
      key: 'description',
    },
    {
      title: 'columns.created_by',
      key: 'createdByUser',
    }, 
    {
      title: 'columns.created_at',
      key: 'createdAt',
    }, 
  ];


  const options: UseCrudOption = {
    defaultCreateValue: {
      isActive: true,
    },
    mapEditValue: (data: any) => (console.log(data), {
      ...data,
    }),
    dialogOptions: {
    }
  }
</script>