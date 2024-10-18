import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



// react-route-6.0 버전 이후의 코드 변화 

// 1. import 문에서 Switch를 Routes로 변경

// 2. Switch 컴포넌트를 Routes 컴포넌트로 대체

// 3. Route 컴포넌트의 사용 방식 변경
//    - 자식 컴포넌트를 element prop으로 전달


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/hello" element={<h1>Hello</h1>} />
//         <Route path="/movie" element={<Detail />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }
