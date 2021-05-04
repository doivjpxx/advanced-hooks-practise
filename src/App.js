import logo from './logo.svg';
import './App.css';
import Expandable from './components/Expandable';

function App() {
  return (
    <div className="App">
      <Expandable>
       
          <img
            src='https://i.imgur.com/qpj4Y7N.png'
            style={{ width: '250px' }}
            alt='reintroducing react book cover'
          />
          <p style={{ opacity: 0.7 }}>
            This book is so f*cking amazing! <br />
            <a
              href='https://leanpub.com/reintroducing-react'
              target='_blank'
              rel='noopener noreferrer'
            >
              Go get it now.
            </a>
          </p>
       
      </Expandable>
    </div>
  );
}

export default App;
