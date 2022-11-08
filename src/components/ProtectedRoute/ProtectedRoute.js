import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ 
  component: Component,
  ...props }) {
  return (
    <Route>
      {() => {
          if (props.loggedIn) {
            return (
            <>
              <Component {...props}/>
            </>)
          } 
          else return <Redirect to="/login" />
        }
      }
    </Route>
  );
};

export default ProtectedRoute; 

