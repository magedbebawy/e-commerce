import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCEC4qgqgMsHXTWo_tyCCTvZ36LOCcJklA",
    authDomain: "crwn-db-a6609.firebaseapp.com",
    projectId: "crwn-db-a6609",
    storageBucket: "crwn-db-a6609.appspot.com",
    messagingSenderId: "546307313760",
    appId: "1:546307313760:web:77fe05d46fa096ae0fb305"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return

    const userRef = firestore.doc(`/users/${user.uid}`)

    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {email, displayName} = user
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        }catch(error){
            console.log('error creating a user', error.message)
        }
    }
    return userRef

}


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase