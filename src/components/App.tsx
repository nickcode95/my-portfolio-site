import React from 'react';
import PageTop from './pageTop';
import CanDo from './CanDo';
import Footer from './Footer';
import Avatar from './Avatar';


function App() {
  return (
    <div className="App">
      <PageTop></PageTop>
      <Avatar />
      <CanDo></CanDo>
      <Footer/>
     
    </div>
  );
}

export default App;
