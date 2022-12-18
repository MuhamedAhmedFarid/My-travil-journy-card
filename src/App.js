import Header from "./components/Header";
import Data from "./components/Data";
import Card from "./components/Card";
function App() {
  const cards = Data.map(item => {
    return(
      <Card 
        item={item}
      
      />
    )
  })



  return (
    <div className="center">
      <Header />
      {cards}
     
    </div>
  );
}

export default App;
