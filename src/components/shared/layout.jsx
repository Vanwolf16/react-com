import { Header } from "../header/Header";
import { Footer } from "../footer/footer";

export const Layout = ({children}) => {
    return(
        <>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
        </>
    );
}