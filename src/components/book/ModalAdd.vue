<template>
 <!-- Modal Structure -->
  <div id="modal-add" class="modal">
    <div class="modal-content">
      <h4 v-if="book.id == ''">Novo Livro</h4>
      <h4 v-if="book.id != ''">Editar Livro</h4>
      <div class="col s12">
        <label for="name" class="active">Nome</label>
        <input placeholder="Nome do Livro" id="name" type="text" v-model="book.name">
      </div>
      <div class="col s12">
        <label for="publishing_company" class="active">Editora</label>
        <input placeholder="Editora" id="publishing_company" type="text" v-model="book.publishing_company">
      </div>
      <div class="col s12">
        <label for="author" class="active">Autor</label>
        <input placeholder="Nome do Livro" id="author" type="text" v-model="book.author">
      </div>
      <div class="col s12">
        <label for="identification" class="active">Código</label>
        <input placeholder="Código" id="identification" type="text" v-model="book.identification">
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
      <a @click="saveBook" class="waves-effect waves-green btn-flat">Salvar</a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "ModalAdd",
  props: ['book'],
  data() {
    return {
      // book: {
      //   name: '',
      //   publishing_company: '',
      //   author: '',
      //   identification: ''
      // }
    }
  },
  methods: {
    saveBook() {
      if(this.book.id == '') {
        this.$store.dispatch('saveBook', this.book)
          .then(response => {
            $('#modal-add').modal('close');
            Swal({
              type: 'success',
              title: 'Livro adicionado com sucesso',
              timer: 2000
            })
            this.$store.commit('toogleModalLoading', false);
          })
          .catch(() => {
              Swal({
              type: 'error',
              title: 'Não foi possível adicionar o livro',
              timer: 2000
            })
          })
      }
      else {
        this.$store.dispatch('updateBook', this.book)
          .then(response => {
            $('#modal-add').modal('close');
            Swal({
              type: 'success',
              title: 'Livro atualizado com sucesso',
              timer: 2000
            })
            this.$store.commit('toogleModalLoading', false);
          })
          .catch(() => {
              Swal({
              type: 'error',
              title: 'Não foi possível atualizar o livro',
              timer: 2000
            })
          })
      }
    }
  }
}
</script>

<style scoped>
.modal.modal-fixed-footer {
    padding: 0;
    height: 55%;
}
</style>

