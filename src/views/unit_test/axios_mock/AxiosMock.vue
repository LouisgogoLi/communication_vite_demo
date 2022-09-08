<template>
  <button @click="getPosts">Get posts</button>
  <ul>
    <li v-for="post in posts.data" :key="post.id" data-test="post">
      {{ post.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "AxiosMock",
};
</script>

<script setup>
import axios from "axios";
import { reactive } from "vue";
const posts = reactive({ data: [] });

const getPosts = async () => {
  let usersData = {};
  usersData = await axios.get("https://jsonplaceholder.typicode.com/users");
  posts.data = usersData.data;
};
</script>

<style lang="scss"></style>
