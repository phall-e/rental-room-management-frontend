import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const token = useCookie<string | null>('token', {
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: 'strict',
    secure: true,
  });
  const users = useCookie('users', {
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: 'strict',
    secure: true,
  });

  const config = useRuntimeConfig();

  const isLoggedIn = computed(() => !!token.value)

  const login = async (payload: { username: string; password: string }) => {
    try {
      const response: any = await useApi('auth/login', {
        method: 'post',
        body: payload,
    });

      token.value = response.payload.token.accessToken;
      users.value = response.payload.users
      console.log('USER RESPONSE', response);
    //   return ;

      useNotification('Login successfully');

      return response
    } catch (error: any) {
        useMessage(error?.message, 'error');
      throw error
    }
  }

  const logout = async () => {
    // 🔥 Clear cookies properly
    token.value = null
    users.value = null

    // Force remove cookie from browser
    // token.value = undefined
    // users.value = undefined

    // Optional: clear localStorage/sessionStorage
    localStorage.clear()
    sessionStorage.clear()

    // Redirect
    await navigateTo('/auth/login')
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    logout,
  }
})