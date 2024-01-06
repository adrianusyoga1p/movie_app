// import Loading from "./components/Loading"
// import useFetch from "./hooks/useFetch"
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shows from './pages/Shows'
import Wrapper from './pages/Wrapper'

const App = () => {
  // const { data, loading } = useFetch('https://movies-api14.p.rapidapi.com/search?query=avengers')
  // const { data, loading } = useFetch('shows');
  const location = useLocation()
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Wrapper />} >
          <Route index element={<Home />} />
          <Route path='/shows' element={<Shows />} />
        </Route>
      </Routes>
    </>
    // <>
    //   {loading && <Loading />}
    //   {!loading &&
    //     <>
    //       <ul className="list-none">
    //         {data.map(item => (
    //           <li key={item?._id}>{item?.contentType}</li>
    //         ))}
    //       </ul>
    //     </>
    //   }
    // </>
  )
}

export default App