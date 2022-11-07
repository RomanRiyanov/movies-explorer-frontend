import React from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function ProtectedRoute ({ 
  component: Component,
  header: Header,
  footer: Footer,
  ...props }) {
  return (
    <Route>
      {() => {
          if (props.loggedIn) {
            return (
            <>
              <Header onToolButtonClick={props.onToolButtonClick}/> 
              <Component {...props}/>
              <Footer/>
            </>)
          } 
          else return <Redirect to="/login" />
        }
      }
    </Route>
  );
};

export default ProtectedRoute; 

