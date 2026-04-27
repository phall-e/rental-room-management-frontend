<template>
  <el-form-item
    :label="$t('columns.code')"
    prop="code"
    :rules="[{ required: true }]"
  >
    <el-input 
      v-model="formRef.code"
      :placeholder="$t('columns.code')"
      clearable
    />
  </el-form-item>
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
  <el-form-item
    :label="$t('columns.name_en')"
    prop="nameEn"
    :rules="[{ required: true }]"
  >
    <el-input 
      v-model="formRef.nameEn"
      :placeholder="$t('columns.name_en')"
      clearable
    />
  </el-form-item>
  <el-form-item
    :label="$t('columns.name_kh')"
    prop="nameKh"
    :rules="[{ required: true }]"
  >
    <el-input 
      v-model="formRef.nameKh"
      :placeholder="$t('columns.name_kh')"
      clearable
    />
  </el-form-item>
  <el-form-item
    :label="$t('columns.description')"
    prop="description"
  >
    <el-input 
      v-model="formRef.description"
      type="textarea"
      :placeholder="$t('columns.description')"
      clearable
    />
  </el-form-item>
</template>

<script lang="ts" setup>
import { CrudDialogState } from '~/types/crud-dialog-state.type';

  const { formRef } = defineProps({
    formRef: {
      type: Object,
      default: () => ({ }),
    }
  });

  // const dialogState = useCrudDialogStateStore();

  const branches = useMasterData<any>('admin/master-data/branches/select-options');

  // // Get branch code
  // watch(()=> [dialogState.dialogState], async()=> {
  //   if (dialogState.dialogState === CrudDialogState.CREATE) {
  //     const response: any = await useApi('admin/master-data/branch/next-code');
  //     if (response) {
  //       formRef.code = response.payload;
  //     }
  //   }
  // }, { immediate: true });
</script>

<style>

</style>