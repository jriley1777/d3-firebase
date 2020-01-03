import config from './config';
import app from 'firebase/app';
import 'firebase/firestore';

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
    }
    getCollection(collection) {
        return this.db.collection(collection).get();
    }
    post(collection, document, data) {
        return this.db.collection(collection).doc(document).set(data)
    }
}

const firebase = new Firebase();
export default firebase;