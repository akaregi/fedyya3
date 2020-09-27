<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          fedyya
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/works">
          Works
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-right: 1rem;
  }

  ul li:first-child {
    margin-right: auto;
  }
</style>
