import { Route, Switch, Redirect } from "react-router-dom";
import React from 'react'
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import './App.css'
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-snd-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckOutPage from "./pages/checkout/checkout.copmonent";



class App extends React.Component {
  

  componentDidMount(){
    const {setCurrentUserKey} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      if(user){
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot( snapshot => {
          const user = {
              id: snapshot.id,
              ...snapshot.data()
          }
          setCurrentUserKey(user)
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const {currentUser} = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin'
          render={
            ()=> currentUser ? <Redirect to='/' />
            :
            (<SignInAndSignUp/>)
          }></Route>
          <Route path='/checkout' component={CheckOutPage} />
        </Switch>
      </div>
      
    );
  }
  
}

const mapDispatchToProps = dispatch => (
  {
    setCurrentUserKey : user => dispatch(setCurrentUser(user))
  }
)

const mapStateToProps = ({user}) => (
  {
    currentUser: user.currentUser
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
