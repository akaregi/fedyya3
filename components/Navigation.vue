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
nav {
  font-size: 16px;
}

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

a {
  padding: .8rem;

  color: var(--text);
}

a:hover {
  background-color: #fafafa;
}

a.nuxt-link-exact-active.nuxt-link-active {
  color: var(--link);
  font-weight: bold;
}
</style>
