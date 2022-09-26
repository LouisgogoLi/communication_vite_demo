import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true });
  if (p === 'ed') return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error('invalid credentials'));
}

export const useUserStore = defineStore('user', () => {
  const name = ref('Eduardo');
  const isAdmin = ref(true);

  function logout() {
    this.$patch({
      name: '',
      isAdmin: false,
    });
    // we could do other stuff like redirecting the user
  }

  /**
   * Attempt to login a user
   * @param {string} user
   * @param {string} password
   */
  async function login(user, password) {
    const userData = await apiLogin(user, password);

    this.$patch({
      name: user,
      ...userData,
    });
  }

  return { name, isAdmin, logout, login };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
