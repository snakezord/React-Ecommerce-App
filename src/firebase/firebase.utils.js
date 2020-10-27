import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyB9jUwNMN2IU-EjeeQALIC-X9YAOsXUsUk",
    authDomain: "e-commerce-db-ab8ca.firebaseapp.com",
    databaseURL: "https://e-commerce-db-ab8ca.firebaseio.com",
    projectId: "e-commerce-db-ab8ca",
    storageBucket: "e-commerce-db-ab8ca.appspot.com",
    messagingSenderId: "693614305264",
    appId: "1:693614305264:web:61c2865325cae632190735",
    measurementId: "G-YY8W1DZWHC"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
     if(!userAuth) return

     const userRef = firestore.doc(`users/${userAuth.uid}`)

     const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
  })

  return await batch.commit()
}

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const {title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  
  return transformedCollections.reduce((acc, collection) =>{
    acc[collection.title.toLowerCase()] = collection
    return acc
  } , {})
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
