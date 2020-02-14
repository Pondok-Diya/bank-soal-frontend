<template>
  <b-container class="m-3">
    <h1>Tambahkan soal baru</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Judul:" label-for="input-judul"
          description="Gunakan judul yang ringkas namun mudah dimengerti."
        >
          <b-form-input
            id="input-judul"
            v-model="form.judul"
            type="text"
            required
            placeholder="Isi dengan judul soal"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Isi soal:" label-for="input-content">
          <basic-editor @update="onUpdate"/>          
        </b-form-group>        
        <b-button type="submit" class="btn-sm mr-2" variant="primary">Submit</b-button>
        <b-button type="reset" class="btn-sm" variant="danger">Reset</b-button>        
      </b-form>
    </div>        
  </b-container>
</template>

<script>
import BasicEditor from '../components/BasicEditor'
export default {
  name: 'SoalBaru',
  components: {
    BasicEditor,
    
  },
  data() {
    return {
      content: '',      
      show: true,
      form: {

      }
    }
  },
  methods: {
    onUpdate(html) {
      this.content = html
    },
    onSubmit() {

    },
    onReset() {

    },
    
  },
  mounted() {
    
  },
  beforeDestroy() {
    
  },
}
</script>
