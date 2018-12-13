import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from '../services/Firebase';
import Firestore from '../services/Firestore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    books: [],
    subjects: [],
    showModalLoading: false,
  },
  actions: {
    login({commit, state}) {
      Firebase.auth().signInWithEmailAndPassword(state.user.email, state.user.password).then(user => {
          commit('setUser', user)
      }).catch(err => {
        console.log(err)
      })
    },
    logout({commit}) {
      Firebase.auth().signOut()
    },
    getBooks({commit, state, dispatch}) {
      // this.$store.dispatch('toogleModalLoading');
      commit('toogleModalLoading', true);
      Firestore.collection('users/' + state.user.uid + '/books').orderBy("name")
        .onSnapshot({ includeMetadataChanges: true }, function (querySnapshot) {
          let list = [];
          querySnapshot.forEach(doc => {
            list.push({
              id: doc.id,
              ...JSON.parse(doc._document.data.toString())
            });
          });

          commit('setBooks', list)
          commit('toogleModalLoading', false);
        },
        function (error) {
          alert(error)
          commit('toogleModalLoading', false)
        })
    },
    saveBook({commit, state}, book) {
        return new Promise((resolve, reject) => {
          commit('toogleModalLoading', true);
          Firestore.collection(`users/${state.user.uid}/books`).doc().set({
            name: book.name,
            publishing_company: book.publishing_company,
            author: book.author,
            identification: book.identification
          })
          .then(response => {
            resolve(response);
          })
          .catch(response => {
            commit('toogleModalLoading', false);
            reject(response);
          })
        })
    },
    updateBook({commit, state}, book) {
      return new Promise((resolve, reject) => {
        commit('toogleModalLoading', true);
        Firestore.collection(`users/${state.user.uid}/books`).doc(book.id).set({
              name: book.name,
              publishing_company: book.publishing_company,
              author: book.author,
              identification: book.identification
        })
          .then(response => {
            resolve(response);
          })
          .catch(response => {
            commit('toogleModalLoading', false);
            reject(response);
          })
        })
    },
    deleteBook({commit, state}, book) {
      Firestore.collection(`users/${state.user.uid}/books`).doc(book.id).delete()
      .then(function () {
        resolve(response);
      }).catch(function (error) {
        commit('toogleModalLoading', false);
        reject(response);
      });
    },
    getSubjects({commit, state}) {
      Firestore.collection('users/' + state.user.uid + '/subjects').orderBy("name")
        .onSnapshot({ includeMetadataChanges: true }, function (querySnapshot) {
          let list = [];
          querySnapshot.forEach(doc => {
            list.push({
              id: doc.id,
              ...JSON.parse(doc._document.data.toString())
            });
          });

          commit('setSubjects', list)
        },
        function (error) {
          alert(error)
        })
    }
  },
  getters: {
    getShowModalLoading(state) {
      return state.showModalLoading;
    }
  },
  mutations: {
    setLoginForm(state, val) {
      state.user.email = val.email,
      state.user.password = val.password
    },
    setUser(state, val) {
      state.user = val;
    },
    setBooks(state, val) {
      state.books = val
    },
    setSubjects(state, val) {
      state.subjects = val
    },
    toogleModalLoading(state, val) {
      state.showModalLoading = val;
    }
  }
})
