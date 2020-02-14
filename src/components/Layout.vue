<template>
  <div>
    <Header/>
    <router-view />      
  </div>  
</template>
<script>
import Header from './Header'
export default {
  name: 'Layout',
  components: {Header}
}
</script>