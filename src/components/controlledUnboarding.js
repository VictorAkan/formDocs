

import React, { useState } from "react";

export const UncontrolledOnboarding = ({ children, onFinished }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1
    const updateData = {
      ...onboardingData, 
      ...stepData
    }
    setOnboardingData(updateData)
    if (nextIndex < children.length) {
      setCurrentIndex(c => c + 1);
    } else {
      onFinished(updateData)
    }
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }
  return currentChild
};