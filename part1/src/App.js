const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/TameemShahid'>Tameem Shahid</a>
    </div>
  )
}

function App() {
  const name = 'Tameem';
  const age = 23;

  return (
    <>
      <h1>Greetings!</h1>
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
}

export default App;