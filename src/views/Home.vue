<template>
  <b-container class="p-3">   
    <b-jumbotron header="Bank Soal" lead="Bank soal latihan pemrograman Diya" bg-variant="light" text-variant="dark" class="p-3">
    <hr>
    <h4>Pintasan:</h4>
    <div>
      User: 
      <router-link to="/pages/soal">Daftar soal</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Registrasi</router-link> |
    </div>
    <div>
      Admin: 
      <router-link to="/admin/soalbaru">Soal baru</router-link> |
    </div>
  </b-jumbotron>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
  .navbar .navbar-nav {    
    float: none;
    vertical-align: top;
  }

  .navbar .navbar-collapse {
    text-align: center;
  }
</style>

