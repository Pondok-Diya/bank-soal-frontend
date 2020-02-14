<template>
  <div>
    <header-admin/>
    <router-view />      
  </div>  
</template>
<script>
import HeaderAdmin from './HeaderAdmin'
export default {
  name: 'LayoutAdmin',
  components: {HeaderAdmin}
}
</script>