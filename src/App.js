import './App.css';
import image from './image.jpg';
import { MyList } from './MyList';

function App() {
  return (
    <div className='container'>
      <img src={image} width='100%' alt='list'/>
  
        <MyList/>

    </div>
  );
}

export default App;
