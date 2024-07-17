<template>
  <div class="dash">
    <AffichTable />
  </div>
</template>

<script>
import AffichTable from './components/AffichTable.vue'

export default {
  name: 'App',
  components: {
    AffichTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dash{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
