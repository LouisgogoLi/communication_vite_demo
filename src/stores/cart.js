import { reactive, computed } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { useUserStore } from './user';

export const useCartStore = defineStore('cart', () => {
  //cartRaw
  const rawItems = reactive([]);

  // @returns {Array<{ name: string; amount: number }>}
  const items = computed(() =>
    rawItems.reduce((items, item) => {
      const existingItem = items.find((it) => it.name === item);

      if (!existingItem) {
        items.push({ name: item, amount: 1 });
      } else {
        existingItem.amount++;
      }

      return items;
    }, [])
  );

  // Add item to the cart
  // @param {string} name
  function addItem(name) {
    rawItems.push(name);
  }

  //Remove item from the cart
  function removeItem(name) {
    const i = rawItems.lastIndexOf(name);
    if (i > -1) rawItems.splice(i, 1);
  }

  //購買後 清除items
  async function purchaseItems() {
    const user = useUserStore();
    if (!user.name) return;

    console.log('Purchasing', items.value);
    const n = items.value.length;
    return n;
  }

  return { rawItems, items, addItem, removeItem, purchaseItems };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
