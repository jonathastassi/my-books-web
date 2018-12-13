<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col s7">
        <h4>Lista de Livros</h4>
      </div> -->
      <div class="input-field col m10 s12">
        <input id="text_find" type="text" class="validate">
        <label for="text_find">Buscar pelo livro, editora, autor, código...</label>
      </div>
      <!-- <div class="input-field col m4 s12">
        <select>
          <option value="" disabled selected>Selecione</option>
          <option :value="subject.id" v-for="subject in subjects" :key="subject.id">{{ subject.name }}</option>
        </select>
        <label>Assunto</label>
      </div> -->
      <div class="input-field col m2 s12">
        <button @click="newBook" class="btn waves-effect waves-light green lighten-4 btn-flat btn-add" ><i class="material-icons left">add</i> Novo Livro</button>
      </div>
      <!-- <div class="col s5">
        <label>Browser Select</label>
        <select class="browser-default">
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div> -->
    </div>
    <div class="row">
      <h5 v-if="books.length == 0 && !$store.getters.getShowModalLoading" style="text-align: center">Cadastre um livro...</h5>
      <div class="col l4 m6 s12" v-for="book in books" :key="book.id">
          <!-- <div class="col s12 m7"> -->
        <div class="card horizontal">
          <!-- <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6">
          </div> -->
          <div class="card-stacked">
            <div class="card-content">
               <span class="card-title">{{ book.name }}</span>
               <div class="row no-margin-bottom" >
                 <div class="col s3">
                   <label>Editora</label>
                 </div>
                 <div class="col s9">
                   <span>{{ book.publishing_company }}</span>
                 </div>
                 <div class="col s3">
                   <label>Autor</label>
                 </div>
                 <div class="col s9">
                   <span>{{ book.author }}</span>
                 </div>
                 <div class="col s3">
                   <label>Código</label>
                 </div>
                 <div class="col s9">
                   <span>{{ book.identification }}</span>
                 </div>
               </div>
            </div>
            <div class="card-action">
              <a @click="editBook(book)" class="btn waves-effect waves-light green lighten-4 btn-flat">Editar</a>
              <a @click="deleteBook(book)" class="btn waves-effect waves-light green lighten-4 btn-flat">Deletar</a>
            </div>
          </div>
        </div>
  <!-- </div> -->

      </div>
    </div>

    <modal-add :book="book"></modal-add>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import ModalAdd from '@/components/book/ModalAdd';

import Swal from 'sweetalert2'


export default {
  components: {ModalAdd},
  data() {
    return {
      book: {
        id: '',
        name: '',
        publishing_company: '',
        author: '',
        identification: ''
      }
    }
  },
  methods: {
    newBook() {
      this.book = {
        id: '',
        name: '',
        publishing_company: '',
        author: '',
        identification: ''
      }
      $('#modal-add').modal('open');
    },
    editBook(book) {
      this.book = Object.assign({}, book);
      $('#modal-add').modal('open');
    },
    deleteBook(book) {
      Swal({
        title: `Deseja deletar o livro ${book.name}?`,
        text: "Essa operação não poderá ser desfeita!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('deleteBook', book)
            .then(response => {
              Swal({
                type: 'success',
                title: 'Livro deletado com sucesso',
                timer: 2000
              })
            })
            .catch(() => {
              Swal({
              type: 'error',
              title: 'Não foi possível deletar o livro',
              timer: 2000
            })
          })
        }
      })
    }
  },
  computed: mapState([
    'books',
    'subjects'
  ]),
  mounted() {
    // var elems = document.querySelectorAll('select');
    // M.FormSelect.init(elems);
    $('.modal').modal();


    // var elems = document.querySelectorAll('.modal');
    // M.Modal.getInstance(elems);

    // this.books = this.$store.dispatch('getBooks');

    // this.$store.dispatch('getSubjects');
    this.$store.dispatch('getBooks');

  }
}
</script>

<style scoped>
.no-margin-bottom {
  margin-bottom: 0px;
}

.btn-add {
    height: 46px;
    line-height: 46px;
    width: 100%;
}
</style>


