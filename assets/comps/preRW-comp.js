
riot.tag2('prerw-comp', '', '', '', function(opts) {

    const config = {
       apiKey: 'asdfgt' + 'asxdcevf'
       authDomain: 'someapp.firebaseapp.com',
       projectId: 'someapp'
    }

    window.firebase.initializeApp(config)
    window.auth =firebase.auth()
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

    window.db1  = window.firebase.firestore()
});