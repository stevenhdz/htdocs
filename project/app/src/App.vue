<template>
  <div id="q-app">
    <router-view />
    <notifications group="foo"  position="bottom left" max-width="auto"/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
