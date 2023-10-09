import DetailsBar from "./DetailsBar";
import Filter from "./Filter";
import Header from "./Header";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import { useWidnowSize } from "../hooks/useWindowSize";

function App() {
  const isMobile = useWidnowSize();

  return (
    <main>
      <h1 className="sr-only">React Todo App</h1>
      <div className="background"></div>
      <div className="topContainer">
        <Header />
        <InputBar />
        <div className="todoTopContainer">
          <TodoList />
          <DetailsBar />
        </div>

        {!isMobile && <Filter isMobile={!isMobile} />}
      </div>
    </main>
  );
}

export default App;
