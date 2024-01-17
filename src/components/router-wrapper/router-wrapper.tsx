import { Outlet } from "react-router-dom";
import Header from "../header";
import { RouterWrapperDiv } from "./styles";
import Footer from "../footer";

export default function RouterWrapper() {
  return (
    <RouterWrapperDiv>
        <Header/>
        <Outlet/>
        <Footer/>
    </RouterWrapperDiv>
  )
}
