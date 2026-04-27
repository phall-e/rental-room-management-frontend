<template>
    <TablesMain
      module-name="room"
      :page-header-options="{
        pageTitle: 'menu.room',
        breadcrumbs: breadcrumbs
      }"
      crud-path="admin/master-data/rooms"
      :headers="headers"
      :table-options="options"
    >
      <template #form="{ formRef }">
        <AdminRoomForm :form-ref="formRef"/>
      </template>
      <template #item.createdByUser="{ item }">
        {{ item?.createdByUser?.username }}
      </template>
      <template #item.building.branch="{ item }">
        {{ item?.building?.branch[$t('name_lang')] }}
      </template>
      <template #item.building="{ item }">
        {{ item?.building[$t('name_lang')] }}
      </template>
      <template #item.roomType="{ item }">
        {{ item?.roomType[$t('name_lang')] }}
      </template>
      <template #item.floor="{ item }">
        {{ item?.floor[$t('name_lang')] }}
      </template>
      <template #item.status="{ item }">
        <el-tag
          :type="item.statusId === 1 ? 'success' : item.statusId === 2 ? 'danger' : 'warning'"
        >
          {{ item?.status?.nameKh }}
        </el-tag>
      </template>
      <template #item.price="{ item }">
        {{ formatCurrencyUSD(item.price) }}
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
    permissions: ['read-room'],
  });

  const breadcrumbs = ['menu.master_data', 'menu.room'];
  const headers: Headers[] = [
    {
      title: 'columns.room_number',
      key: 'roomNumber',
    },
    {
      title: 'columns.status',
      key: 'status',
    }, 
    {
      title: 'menu.room_type',
      key: 'roomType',
    },   
    {
      title: 'menu.branch',
      key: 'building.branch',
    },
    {
      title: 'menu.building',
      key: 'building',
    }, 
    {
      title: 'menu.floor',
      key: 'floor',
    },     
    {
      title: 'column.price',
      key: 'price',
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
      previuseBranchId: data.building.branchId,
      branchId: data.building.branchId,
    }),
    dialogOptions: {
    }
  }
</script>