import React, { useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ 
  component: Component,
  ...props }) {

    // const loggedIn = useRef(false);

    // useEffect(()=> {
    //   loggedIn.current = 
    // })

  return (
    <Route exact path='/saved-movies'>
      {() => {
          if (props.loggedIn) {
            return (
            <>
              <Component {...props}/>
            </>)
          } 
          else return <Redirect to="/main" />
        }
      }
    </Route>
  );
};

export default ProtectedRoute; 





  
// function tokenCheck () {
//   mainApi.getUserInfo()
//     .then(userData => {
//       if (userData) {
//         setLoggedIn(true);
//         setCurrentUser({
//           name: userData.name,
//           email: userData.email
//         })
//       }})
//     .catch(err => console.log(err))
// }

// useEffect(() => {        
//   tokenCheck();
// }, [loggedIn]);

// useEffect(() => {
//   const location = sessionStorage.getItem('location')
//   console.log(location.pathname);
//   // <Redirect to={sessionStorage.getItem('location')}/>
// }, [])

// // useEffect(() => {
// //   console.log(cookies.getItem('jwt'));
// //   // console.log(document.cookie);
// //   if (cookies.get('jwt')) {
// //     setLoggedIn(true);
// //   }
// // }, [])