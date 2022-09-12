<template>
  <div>
    <h1>{{ props.msg }}</h1>
    <p>
      {{ $t("created_project") }}
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </p>
    <h3>{{ $t("Documentation") }}</h3>
    <ul>
      <li>
        <a target="_blank" href="https://vuejs.org/"
          >Vue’s official documentation</a
        >
      </li>
    </ul>
    <h3>{{ $t("Tooling") }}</h3>
    <ul>
      <li>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"
          >Vite</a
        >
      </li>
      <li>
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      </li>
      <li>
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
          >Volar</a
        >
      </li>
      <li>
        <a href="https://www.cypress.io/" target="_blank">Cypress</a>
      </li>
      <li>
        <a href="https://on.cypress.io/component" target="_blank"
          >Cypress Component Testing
        </a>
      </li>
      <li>
        <a href="https://vitest.dev/" target="_blank">Vitest</a>
      </li>
    </ul>
    <h3>{{ $t("Ecosystem") }}</h3>
    <ul>
      <li>
        <a href="https://pinia.vuejs.org/">Pinia</a>
      </li>
      <li>
        <a href="https://router.vuejs.org/">Vue Router</a>
      </li>
      <li>
        <a href="https://test-utils.vuejs.org/">Vue Test Utils</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/devtools">Vue Dev Tools</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
      </li>
    </ul>
    <h3>{{ $t("Community") }}</h3>
    <ul>
      <li>
        <a href="https://chat.vuejs.org">Vue Land</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/questions/tagged/vue.js"
          >StackOverflow</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs">@vuejs</a>
      </li>
    </ul>
    <h3>{{ $t("Support_Vue") }}</h3>
    <ul>
      <li>
        <a target="_blank" href="https://vuejs.org/sponsor/"
          >becoming a sponsor</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: "沒有傳值",
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
