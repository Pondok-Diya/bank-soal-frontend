<template>
  <div>   
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand >
        <router-link to="/pages">
          <img src="/images/logo-inverted-sm.png" height="38" alt="Bank Soal Diya">
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">

      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Beranda</b-nav-item>
          <b-nav-item href="#">Soal</b-nav-item>
          <b-nav-item href="#">Progress</b-nav-item>
          <b-nav-item href="#">Diskusi</b-nav-item>
          <b-nav-item href="/login">Masuk</b-nav-item>
          <b-nav-item href="/register">Mendaftar</b-nav-item>
          <b-nav-item href="#">Tentang Situs</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <span ><i class="fa fa-user"/></span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> 
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
