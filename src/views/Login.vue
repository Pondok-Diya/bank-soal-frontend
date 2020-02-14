<template>
  <div class="login-page">  
    <b-container>
      <b-row class="justify-content-center align-items-center login-row">
        <b-col md=6 sm=12>            
          <b-card>
            <b-form>
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                  <label for="username" class="text-info">Email:</label><br>
                  <input type="email" name="email" id="email" class="form-control">
              </div>
              <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br>
                  <input type="password" name="password" id="password" class="form-control">
              </div>
              <div class="form-group">
                  <label for="remember-me" class="text-info">
                    <span>Ingat saya </span>
                    <span><input type="checkbox"></span>
                  </label><br>
                  <b-btn class="btn-info btn-md" value="submit"> Kirim </b-btn>
              </div>
              <div id="register-link" class="text-right">
                  <router-link class="text-info" to="/register">Daftar di sini</router-link>
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
  name: 'Login',
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
