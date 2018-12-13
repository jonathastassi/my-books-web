import firebase from '../services/Firebase'

var firestore = firebase.firestore();

const settings = {
    timestampsInSnapshots: true,
    // persistence: true
}

firestore.settings(settings);

firestore.enablePersistence();

export default firestore;
