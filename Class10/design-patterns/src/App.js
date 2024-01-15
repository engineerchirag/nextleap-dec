import logo from './logo.svg';
import './App.css';
import CompoundPattern from './component/compoundComponent';
import FlexiblePattern from './component/flexibleComponent';
import ButtonWrapper from './component/propsGetter';
import RenderPropsPattern from './component/renderProps';
import ReducerPattern from './component/reducerComponent';

function App() {
  return (
    <div className="App">
      {/* <CompoundPattern /> */}
      {/* <FlexiblePattern /> */}
      {/* <ButtonWrapper /> */}
      {/* <RenderPropsPattern /> */}
      <ReducerPattern />
    </div>
  );
}

export default App;
