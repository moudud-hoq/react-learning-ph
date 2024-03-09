// eslint-disable-next-line react/prop-types
// export default function ToDo({task}) {
//   return (
//     <div>
//       <ol>
//         <li>Your Task: {task}</li>
//         <li>Masud</li>
//       </ol>
//     </div>
//   );
// }

//==============================================
// Conditional Rendaring Option 1
// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

//==============================================
// Conditional Rendaring Option 2
// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

//==============================================
// Conditional Rendaring Option 3 usung Ternary Operator
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work On"}: {task}
//     </li>
//   );
// }

//==============================================
// Conditional Rendaring Option 4 using &&
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ":Done"}
//     </li>
//   );
// }
