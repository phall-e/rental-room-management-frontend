<template>
  <div class="common-layout">
    <el-container>
      <el-aside 
        width="250px" 
        class="px-5 flex items-start justify-between flex-col h-screen border-r"
      >
        <div class="w-full">
          <div class="w-full h-[100px] flex items-center justify-center">
            <el-image
              :src="logo"
              class="h-[60px]"
            />
          </div>
          <NuxtLink 
            to="/"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="mage:dashboard-4"/>
            </div>
            <span>ផ្ទាំងគ្រប់គ្រងទូទៅ</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/branch"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="solar:home-broken"/>
            </div>
            <span>សាខា</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/building"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="tabler:building-bank"/>
            </div>
            <span>អាគារ</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/room"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="clarity:blocks-group-line"/>
            </div>
            <span>គ្រប់គ្រងបន្ទប់</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/tenant"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="solar:user-id-outline"/>
            </div>
            <span>អ្នកជួល</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/room-payment"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="lsicon:list-outline"/>
            </div>
            <span>បង់ថ្លៃបន្ទប់</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/utilities"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="ic:outline-water-drop"/>
            </div>
            <span>កត់ត្រាទឹកភ្លើង</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/expense"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="lsicon:list-outline"/>
            </div>
            <span>ការចំណាយ</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/report"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="mdi:chart-bar"/>
            </div>
            <span>របាយការណ៍</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/setting"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="uil:setting"/>
            </div>
            <span>ការកំណត់</span>
          </NuxtLink>
          <NuxtLink 
            to="/admin/help"
            class="h-[40px] w-full flex items-center text-gray-600 rounded-md"  
            exact-active-class="bg-[#f9ad16] bg-opacity-10 !text-[#f9ad16]"
          >
            <div class="h-full w-[40px] flex items-center justify-center">
              <Icon name="material-symbols:help-outline-rounded"/>
            </div>
            <span>ជំនួយ</span>
          </NuxtLink>
        </div>
        <div class="w-full flex items-center mb-5">
          <div class="w-[40px]">
            <el-image
              :src="profile"
              fit="cover"
              class="w-[30px] h-[30px] rounded-full"
            />
          </div>
          <div class="text-[13px] text-gray-600">
            <div class="font-bold">John Doe</div>
            <div class="text-[11px]">Admin</div>
          </div>
        </div>

      </el-aside>
      <el-container>
        <el-header
          class="border-b flex items-center justify-between relative"
        >
          <div 
            class="h-[25px] w-[25px] bg-white rounded-full border flex items-center justify-center absolute left-[-12.5px] text-gray-600 cursor-pointer"
          >
            <Icon 
              name="uim:angle-left"
              :size="25"
            />
          </div>
          <div>
            <div class="font-bold text-gray-600 text-[18px]">{{ $t(breadcrumbsStore.pageTitle) }}</div>
            <el-breadcrumb v-if="breadcrumbsStore?.breadcrumbs" :separator-icon="ArrowRight" class="mt-2">
              <el-breadcrumb-item v-for="item in breadcrumbsStore.breadcrumbs" :key="item">{{ $t(item) }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $t('list') }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="flex items-center gap-2">
            <el-dropdown>
              <div class="flex items-center gap-1">
                <Icon :name="language?.icon || ''"/> 
                <span>{{ language?.label }}</span>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item 
                    v-for="item in languages"
                    :key="item.key"
                    @click="changeLanguage(item.key)" 
                    class="flex items-center font-Nokora"
                  >
                    <Icon :name="item.icon"/>&nbsp;&nbsp;{{ item.label }} 
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown>
              <icon :size="25" name="qlementine-icons:user-16"/>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item 
                    class="flex items-center font-Nokora"
                  >
                    <Icon :size="18" name="hugeicons:user-square"/>&nbsp;&nbsp;{{ $t('view_profile') }} 
                  </el-dropdown-item>
                  <el-dropdown-item 
                    class="flex items-center font-Nokora"
                  >
                    <Icon :size="18" name="akar-icons:edit"/>&nbsp;&nbsp;{{ $t('edit_profile') }} 
                  </el-dropdown-item>
                  <el-dropdown-item 
                    class="flex items-center font-Nokora"
                  >
                    <Icon :size="18" name="mingcute:lock-line"/>&nbsp;&nbsp;{{ $t('change_password') }} 
                  </el-dropdown-item>
                  <el-dropdown-item 
                    class="flex items-center font-Nokora"
                    @click="auth.logout()"
                  >
                    <Icon :size="18" name="ri:logout-circle-r-line"/>&nbsp;&nbsp;{{ $t('logout') }} 
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <el-scrollbar>
            <slot/>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import logo from '~/assets/images/logo.png';
  import profile from '~/assets/images/user-profile.jpg';
  import { ArrowRight } from '@element-plus/icons-vue';

  interface Language {
    label: string;
    icon: string;
    key: 'en' | 'km';
  };

  const languages = ref<Language[]>([
    {
      label: 'English',
      icon: 'emojione-v1:flag-for-united-states',
      key: 'en',
    },
    {
      label: 'ភាសាខ្មែរ',
      icon: 'emojione-v1:flag-for-cambodia',
      key: 'km',
    },
  ]);
  const { locale, setLocale } = useI18n();

  const changeLanguage = (key: 'en' | 'km') => {
    setLocale(key);
  }

  const language = computed<Language | undefined>(() => {
    const item = languages.value.find((i: Language) => i.key === locale.value);
    return item;
  });

  const breadcrumbsStore = useBreadcrumbStore();

  const auth = useAuthStore();
</script>

<style>

</style>