
import { Outlet} from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"






function App() {
return (
<div>
  <Navbar/>
  <Outlet/>
  <Footer/>
</div>)
}
export default App