import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Containers/Login/Login';

function App() {

  // const imageURL = (imageID) => {

  //   return `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`

  // }

  // const getData = async () => {

  //   let response = axios.get("https://api.artic.edu/api/v1/artworks?fields=technique_titles,title") 

  //   return response
  // }

  // getData().then(data => console.log(data.data.data.map(image => {
  //   console.log(
  //     imageURL(image.image_id)
  //   )
  // }))).catch(error => {console.log(error)})

  // getData().then(data => { console.log(data)}).catch(error => {console.log("error:", error)})
  
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routes>
         <Route path="/" element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
