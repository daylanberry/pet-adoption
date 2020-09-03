import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';


const App = () => {

  const theme = useState('darkblue')

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to='/'>
            Adopt Me!
          </Link>
        </header>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
};

render(<App />, document.getElementById("root"));