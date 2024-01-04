// App.tsx
import React from 'react';
import GradientScreen from './styles/layout/GradientScreen';
import ProfileCardComponent from './styles/profilePage.tsx/ProfileCardComponent';
import NavBarComponent from './styles/layout/NavBarComponent';
const App: React.FC = () => {
  return (
    <div>
      <GradientScreen>
        <NavBarComponent/>
        <ProfileCardComponent/>
      </GradientScreen>
    </div>
  );
};

export default App;
