<template>
  <el-row
    :gutter="20"
  >
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.tenant_name')"
        prop="tenantName"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.tenantName"
          :placeholder="$t('columns.tenant_name')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.id_card_number')"
        prop="idCardNumber"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.idCardNumber"
          :placeholder="$t('columns.id_card_number')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.phone_number')"
        prop="phoneNumber"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.phoneNumber"
          :placeholder="$t('columns.phone_number')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col
      :span="8"
    >
      <el-form-item
        :label="$t('menu.branch')"
        prop="branchId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.branchId"
          :placeholder="$t('menu.branch')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in branches" 
            :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col
      :span="8"
    >
      <el-form-item
        :label="$t('menu.building')"
        prop="buildingId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.buildingId"
          :placeholder="$t('menu.building')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in buildingGroups" 
            :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col
      :span="8"
    >
      <el-form-item
        :label="$t('menu.room')"
        prop="roomId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.roomId"
          :placeholder="$t('menu.room')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in roomGroups" 
            :key="item.id" :label="item.roomNumber" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col
      :span="8"
    >
      <el-form-item
        :label="$t('menu.floor')"
        prop="floorId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.floorId"
          :placeholder="$t('menu.floor')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in floors" 
            :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('menu.room_type')"
        prop="roomTypeId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.roomTypeId"
          :placeholder="$t('menu.room_type')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in roomTypes" 
            :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.price')"
        prop="price"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.price"
          type="number"
          :placeholder="$t('columns.price')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.deposit_amount')"
        prop="depositAmount"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.depositAmount"
          type="number"
          :placeholder="$t('columns.deposit_amount')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.start_date')"
        prop="startDate"
        :rules="[{ required: true }]"
      >
        <el-date-picker
          v-model="formRef.startDate"
          clearable
          :placeholder="$t('columns.start_date')"
          class="!w-full"
        />
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item
        :label="$t('columns.status')"
        prop="statusId"
        :rules="[{ required: true }]"
      >
        <el-select
          v-model="formRef.statusId"
          :placeholder="$t('columns.status')"
          clearable
          filterable
        >
          <el-option 
            v-for="item in statuses" 
            :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
            class="font-Nokora"
          />
        </el-select>
      </el-form-item>
    </el-col>
  </el-row>
  <el-tabs
    v-model="currentTab"
    type="border-card"
  >
    <el-tab-pane
      :label="$t('columns.attachments')"
      key="attachment"
      name="attachment"
    >
      <DropZone v-model="formRef.attachments"/>
    </el-tab-pane>
  </el-tabs>

</template>

<script lang="ts" setup>
import DropZone from '~/@core/components/DropZone.vue';
import { CrudDialogState } from '~/types/crud-dialog-state.type';

  const { formRef } = defineProps({
    formRef: {
      type: Object,
      default: () => ({ }),
    }
  });

  const currentTab = ref<string>('attachment');

  const dialogState = useCrudDialogStateStore();


  const branches = useMasterData<any>('admin/master-data/branches/select-options');
  const buildings = useMasterData<any>('admin/master-data/buildings/select-options');
  const floors = useMasterData<any>('admin/master-data/floors/select-options');
  const roomTypes = useMasterData<any>('admin/master-data/room-type/select-options');
  const statuses = useMasterData<any>('admin/tenant/room-tenants/tenant-status-select-options');
  const rooms = useMasterData<{id: number; roomNumber: string; buildingId: number; floorId: number; roomTypeId: number; price: number}>('admin/master-data/rooms/select-options?isAvailable=true');

  const isCreating = dialogState.dialogState === CrudDialogState.CREATE;

/* ------------------ COMPUTED ------------------ */
const buildingGroups = computed(() => {
  return buildings.value.filter(
    (item) => item.branchId === formRef.branchId
  );
});

const roomGroups = computed(() => {
  return rooms.value.filter(
    (item) => item.buildingId === formRef.buildingId
  );
});

/* ------------------ WATCHERS ------------------ */

// 🏢 Branch → reset building + all children
watch(
  () => formRef.branchId,
  (newVal, oldVal) => {
    if (!oldVal) return; // ⛔ skip first load (edit mode)

    if (!isCreating && newVal !== oldVal) {
      formRef.buildingId = null;
      formRef.roomId = null;

      // reset dependent fields
      formRef.floorId = null;
      formRef.roomTypeId = null;
      formRef.price = null;
    }
  }
);

// 🏠 Building → reset room + children
watch(
  () => formRef.buildingId,
  (newVal, oldVal) => {
    if (!oldVal) return; // ⛔ skip first load

    if (!isCreating && newVal !== oldVal) {
      formRef.roomId = null;

      // reset dependent fields
      formRef.floorId = null;
      formRef.roomTypeId = null;
      formRef.price = null;
    }
  }
);

// 🚪 Room → auto fill data
watch(
  () => [formRef.roomId, rooms.value],
  ([roomId, roomsList]) => {
    if (!roomId || !roomsList.length) return;

    const item = roomsList.find((r) => r.id === roomId);
    if (!item) return;

    formRef.floorId = item.floorId;
    formRef.roomTypeId = item.roomTypeId;
    formRef.price = item.price;
  },
  { immediate: true }
);

</script>

<style>

</style>