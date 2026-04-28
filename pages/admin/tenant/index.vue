<template>

    <TablesMain
      module-name="room-tenant"
      :page-header-options="{
        pageTitle: 'menu.tenant',
        breadcrumbs: breadcrumbs
      }"
      crud-path="admin/tenant/room-tenants"
      :headers="headers"
      :table-options="options"
    >
      <template #form="{ formRef }">
        <AdminTenantForm :form-ref="formRef"/>
      </template>
      <template #item.createdByUser="{ item }">
        {{ item?.createdByUser?.username }}
      </template>
      <template #item.status="{ item }">
        <el-tag :type="getStatusType(item?.statusId)">
          {{ item?.status?.[$t('name_lang')] }}
        </el-tag>
      </template>
      <template #item.room="{ item }">
        {{ item?.room?.roomNumber }}
      </template>
      <template #item.depositAmount="{ item }">
        {{ formatCurrencyUSD(item.depositAmount) }}
      </template>
      <template #item.branch="{ item }">
        {{ item?.room?.building?.branch[$t('name_lang')] }}
      </template>
      <template #item.building="{ item }">
        {{ item?.room?.building[$t('name_lang')] }}
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
    permissions: ['room-tenant-read'],
  });

  const getStatusType = (statusId: number) => {
    switch (statusId) {
      case 1:
        return 'success'
      case 2:
        return 'warning'
      case 3:
        return 'info'
      default:
        return 'danger'
    }
  }

  const breadcrumbs = ['menu.master_data', 'menu.building'];
  const headers: Headers[] = [
    {
      title: 'columns.status',
      key: 'status',
    },
    {
      title: 'menu.room',
      key: 'room',
    },
    {
      title: 'columns.tenant_name',
      key: 'tenantName',
    }, 
    {
      title: 'menu.branch',
      key: 'branch',
    },
    {
      title: 'menu.building',
      key: 'building',
    },
    {
      title: 'columns.phone_number',
      key: 'phoneNumber',
    },     
    {
      title: 'columns.id_card_number',
      key: 'idCardNumber',
    },
    {
      title: 'columns.deposit_amount',
      key: 'depositAmount',
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
      statusId: 1,
      attachments: [],
    },
    mapEditValue: (data: any) => (console.log(data), {
      ...data,
      branchId: data?.room?.building?.branchId,
      buildingId: data?.room?.buildingId,
      floorId: data?.room?.floorId,
      roomTypeId: data?.room?.roomTypeId,

      previuseBranchId: data?.room?.building?.branchId,
      previuseBuildingId: data?.room?.buildingId,
      previuseFloorId: data?.room?.floorId,
      previuseRoomTypeId: data?.room?.roomTypeId,
      previuseRoomId: data?.roomId,

    }),
    dialogOptions: {
      fullscreen: true,
    }
  }
</script>