<template>
  <div>  
    <b-container>
      <b-row class="justify-content-center align-items-center login-row">
        <b-col md=6 sm=12>            
          <b-card>
            <b-form>
              <h3 class="text-center text-info">Registrasi</h3>
              <div class="form-group">
                  <label for="email" class="text-info">Email:</label><br>
                  <input type="email" name="email" id="email" class="form-control">
              </div>
              <div class="form-group">
                  <label for="name" class="text-info">Nama pengguna:</label><br>
                  <input type="text" name="pengguna" id="pengguna" class="form-control">
              </div>
              <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br>
                  <input type="password" name="password" id="password" class="form-control">
              </div>
              <div class="form-group">
                  <label for="password2" class="text-info">Ulangi Password:</label><br>
                  <input type="password" name="password" id="password" class="form-control">
              </div>
              <div class="form-group">                  
                <b-btn class="btn-info btn-md" value="submit"> Kirim </b-btn>
              </div>
              <div id="login-link" class="text-right">
                  Sudah memiliki akun?
                  <router-link class="text-info" to="/login">Silahkan Login</router-link>
              </div>
            </b-form>
          </b-card>              
        </b-col>
      </b-row>            
    </b-container>
  </div>  
  </template>
<script>
export default {
  name: 'Registrasi',
  components: { },
  data() {
    return {
    };
  },
  methods: {
    login() {
      
    },
  },
  created() {
    
  },
};
</script>
<style>
  .login-page {
    height: 100%;
  }
  .login-row {
    margin-top: 120px;
  }
  .ctn-footer {
    position: absolute;
    bottom: 15px;        
  }
</style>
