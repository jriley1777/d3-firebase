import config from './config';
import app from 'firebase/app';
import 'firebase/firestore';

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.db.settings({ timestampsInSnapshots: true });
    }
    getCollection(collectionName) {
        return this.db.collection(collectionName).get();
    }
}

const firebase = new Firebase();
export default firebase;