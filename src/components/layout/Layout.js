import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto mt-16">{props.children}</main>
      <Footer  />
    </div>
  );
};

export default Layout;
