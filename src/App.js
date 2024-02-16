// import Expenses from "./Components/Expenses/Expenses";
// import Navbar from "./Components/Usaii/Navbar";
import Cta from "./YouTube/Cta";
import Features from "./YouTube/Features";
import Hero from "./YouTube/Hero";
import NavBar from "./YouTube/NavBar";
import Testimonials from "./YouTube/Testimonials";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 234.56,
      date: new Date(2024 - 2 - 15),
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 334.56,
      date: new Date(2024 - 2 - 15),
    },
    {
      id: "e3",
      title: "Rental Insurance",
      amount: 434.56,
      date: new Date(2024 - 2 - 15),
    },
    {
      id: "e4",
      title: "Home Insurance",
      amount: 534.56,
      date: new Date(2024 - 2 - 15),
    },
  ];
  return (
    <div>
      {/* <Navbar />
      <Expenses expenses={expenses} /> */}
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default App;
