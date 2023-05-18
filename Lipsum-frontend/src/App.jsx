import './App.css'
import Landing from './pages/Landing/Landing'
<<<<<<< HEAD
import Master from './pages/Master/Master'
=======
import Home from "./pages/Home/Home";
import Initial from "./pages/Initial/Initial";
import Quiz from './pages/Quiz/Quiz';
>>>>>>> 9fbbd47f90759522ba9c1e2f067ba082601cd6b5

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <Master/>
=======
      <Landing/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>

       </BrowserRouter>
>>>>>>> 9fbbd47f90759522ba9c1e2f067ba082601cd6b5
    </div>
  )
}

export default App
