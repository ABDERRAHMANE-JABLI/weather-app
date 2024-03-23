import Wallpaper from './components/wallpaper/wallpaper';
import Searchbar from './components/searchBar/searchbar';
import Weather from './components/weather/weather';
import { Provider } from 'react-redux';
import store from './Redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Wallpaper/>
        <Searchbar/>
        <Weather/>
      </Provider>
    </div>
  );
}

export default App;
