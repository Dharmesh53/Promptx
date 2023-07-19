import "@styles/globals.css";
import Navbar from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptx",
  description: "Discover and Share AI prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
