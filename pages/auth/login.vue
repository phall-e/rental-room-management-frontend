<template>
  <div class="h-screen w-screen flex items-center justify-between">
    <div class="w-[75%] relative">
      <img 
        src="~/assets/images/loggin-bg.webp" 
        alt="Login"
        class="h-screen w-full object-fit"
      >
      <div class="w-full h-full absolute top-0 l-0 bg-black bg-opacity-50"></div>
      <!-- <div class="w-full fixed z-10 bottom-5 left-5 flex items-center gap-5">
        <button class="flex items-center bg-white bg-opacity-50 rounded-full px-2 py-1">
          <Icon :size="28" name="meteocons:star-fill"/> Modern
        </button>
      </div> -->
    </div>
    <div class="w-[25%] px-5">
      <img src="" alt="">
      <el-form
        label-position="top"
        @submit.prevent="handleLogin"
      >
        <img 
          src="~/assets/images/login.png" 
          alt=""
          class="h-[130px] mx-auto mb-5"
        >
        <el-form-item
          label="Username"
        >
          <el-input
            v-model="formData.username"
            placeholder="Username"
            clearable
          >


          </el-input>
        </el-form-item>
      <el-form-item>
        <el-input
            v-model="formData.password"
            type="password"
            show-password
            placeholder="Password"
            clearable
          >


          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
            class="w-full"
            :disabled="loading"
          >
            <Icon 
              name="eos-icons:bubble-loading"
              v-if="loading"
            />
            <span v-else>Login</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'auth',
    
  });

  const formData = ref({
    username: '',
    password: '',
  });

  

  const authStore = useAuthStore();

  const loading = ref<boolean>(false);

  const handleLogin = async () => {
    loading.value = true;
    try {
      const res = await authStore.login(formData.value);
      navigateTo('/')
    } catch (err: any) {
      console.error('Login error:', err)
    } finally {
      loading.value = false;
    }
  }

</script>
