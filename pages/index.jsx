import React from "react";
import Link from "next/link";

const Child = () => {
  return <a>Move to '/tomato11'</a>;
};
// const App = () => {
//   return (
//     <div>
//       <h2>Link to 'tomato11111' Page</h2>
//       {/* <Link href="/tomato">
//         <Child /> */}
//       {/* <a>Move to '/tomato'</a> */}
//       {/* <p>Move to '/tomato'</p> */}
//       {/* </Link> */}
//       <Link href="/vegetable/potato">
//         <a>Move to '/vegetable/potato'</a>
//       </Link>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <h2>Link to 'potato11' Page</h2>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>
    </div>
  );
};

export default App;
