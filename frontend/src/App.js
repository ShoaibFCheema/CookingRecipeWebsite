import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Header from './components/Header';
import RecipeIndex from './components/RecipeIndex';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
