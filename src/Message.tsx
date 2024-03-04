//PascalCasing for functions
function Message() {
  //babeljs.io/repl can show you how JSX looks as plain JS
  //JSX: JavaScript XML:
  const name = 'Scottie Barns';
  //If statement weird, no {}, hmmmmm
  if (name)
    return <h1>Hello {name}</h1>
  return <h1>Hello World</h1>
}
export default Message;