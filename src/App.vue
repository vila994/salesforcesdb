<template>
  <div id="app">
    <ItemResearch />
  </div>
</template>

<script>
import ItemResearch from './components/ItemResearch';

export default {
  name: 'App',
  components: {
    ItemResearch,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
