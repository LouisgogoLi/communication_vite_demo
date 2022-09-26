<template>
  <div>
    <h2>Hello {{ user.name }}</h2>

    <form @submit.prevent="addItemToCart">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul>
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>

      <button :disabled="!user.name">Buy</button>
      <button :disabled="!cart.items.length" @click="clearCart" type="button">Clear the cart</button>
    </form>

    <div style="margin: 1rem 0">
      <PiniaLogo />
    </div>
  </div>
</template>

<script setup>
import PiniaLogo from '@/components/publicComponents/logo/PiniaLogo.vue';

import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';

const user = useUserStore();
const cart = useCartStore();

const itemName = ref('');

function addItemToCart() {
  if (!itemName.value) return;
  cart.addItem(itemName.value);
  itemName.value = '';
}

function clearCart() {
  if (window.confirm('Are you sure you want to clear the cart?')) {
    cart.rawItems.length = 0;
  }
}

async function buy() {
  const n = await cart.purchaseItems();

  console.log(`Bought ${n} items`);

  cart.rawItems.length = 0;
}
</script>

<style lang=""></style>
