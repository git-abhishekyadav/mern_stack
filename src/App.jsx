
import './App.css';
import WelcomeH5 from './WelcomeH4';
import {Button } from './Button';
import { Hello, HelloWithoutJSX } from './Hello';
import { Card, CardWithoutJSX } from './Card';
import { Rule4 } from './Rules';

function Welcome() {
  return (
    <h3>Welcome to React</h3>
  )
}

function App() {

  return (
    <div>
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <WelcomeH5 />
      <Button />
      <Card />
      <CardWithoutJSX />
      <Rule4 />
    </div>
  )
}

export default App
