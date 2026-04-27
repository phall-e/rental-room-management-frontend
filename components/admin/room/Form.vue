<template>
  <el-row
    :gutter="20"
  >
    <el-col :span="24" v-if="dialogState.dialogState !== CrudDialogState.CREATE">
      <el-form-item
        :label="$t('columns.room_number')"
        prop="roomNumber"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.roomNumber"
          :placeholder="$t('columns.room_number')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col
      :span="12"
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
      :span="12"
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
      :span="12"
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
    <el-col :span="12">
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
    <el-col :span="12">
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
      <el-col :span="12">
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
              v-for="item in roomStatuses" 
              :key="item.id" :label="item[$t('name_lang')]" :value="item.id"
              class="font-Nokora"
            />
          </el-select>
        </el-form-item>
    </el-col>
    <el-col :span="12" v-if="dialogState.dialogState === CrudDialogState.CREATE">
      <el-form-item
        :label="$t('columns.item_length')"
        prop="itemLength"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.itemLength"
          type="number"
          :placeholder="$t('columns.item_length')"
          clearable
        />
      </el-form-item>
    </el-col>
    <el-col :span="12" v-if="dialogState.dialogState === CrudDialogState.CREATE">
      <el-form-item
        :label="$t('columns.start_number')"
        prop="startNumber"
        :rules="[{ required: true }]"
      >
        <el-input 
          v-model="formRef.startNumber"
          type="number"
          :placeholder="$t('columns.start_number')"
          clearable
        />
      </el-form-item>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import { CrudDialogState } from '~/types/crud-dialog-state.type';

  const { formRef } = defineProps({
    formRef: {
      type: Object,
      default: () => ({ }),
    }
  });

  const dialogState = useCrudDialogStateStore();


  const branches = useMasterData<any>('admin/master-data/branches/select-options');
  const buildings = useMasterData<any>('admin/master-data/buildings/select-options');
  const floors = useMasterData<any>('admin/master-data/floors/select-options');
  const roomTypes = useMasterData<any>('admin/master-data/room-type/select-options');
  const roomStatuses = useMasterData<any>('admin/master-data/room-status/select-options');

  const isCreating = dialogState.dialogState === CrudDialogState.CREATE; 
  const buildingGroups = computed(() => {
    const items = buildings.value.filter((item) => item.branchId === formRef.branchId);

    if (!isCreating) {
      if (formRef.branchId !== formRef.previuseBranchId) {
        formRef.buildingId = null;
      }
    }

    return items;
  })

  // watch(() => [], () => {
  //   if (dialogState.dialogState !== CrudDialogState.CREATE) {
  //     alert(formRef.previuseBranchId)
  //   }
  // }, {
  //   immediate: true,
  // })

</script>

<style>

</style>