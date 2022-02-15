import Header from "./components/pages/header"
import Main from "./components/pages/main/main"
import Footer from "./components/pages/footer"

export default function App(){
  return(
    <div className="page-cont">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}