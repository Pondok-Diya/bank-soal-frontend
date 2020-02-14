<template>
  <div>   
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img src="/images/logo-inverted-sm.png" height="38" alt="Bank Soal Diya">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">

      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Dashboard</b-nav-item>
          <b-nav-item href="#">Daftar Soal</b-nav-item>
          <b-nav-item href="#">Daftar Pengguna</b-nav-item>
          <b-nav-item href="admin/soalbaru">Tambah Soal</b-nav-item>          
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
  name: 'HeaderAdmin'
}
</script>
