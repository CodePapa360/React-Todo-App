import DetailsBar from "./components/DetailsBar";
import Filter from "./components/Filter";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import { useWidnowSize } from "./hooks/useWindowSize";

function App() {
  const isMobile = useWidnowSize();

  return (
    <>
      <div className="background"></div>
      <div className="top-container">
        <Header />
        <InputBar />
        <TodoList />
        <DetailsBar />

        {!isMobile && <Filter />}
      </div>
    </>
  );
}

export default App;
