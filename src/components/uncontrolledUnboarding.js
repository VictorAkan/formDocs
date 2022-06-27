// import React from "react"

// export const ControlledOnboarding = ({children, currentIndex, goToNext}) => {
//     const currentChild = React.Children.toArray(children)[currentIndex]

//     if (React.isValidElement(currentChild)) {
//         React.cloneElement(currentChild, { goToNext })
//     }
//     return currentChild
// }
import React from "react";

export const ControlledOnboarding = ({ children, currentIndex, goToNext }) => {
  
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }
  return currentChild
};
