const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return <p>{props.title} {props.count}</p>
}

const Content = (props) => {

  return (
    <>
      <Part title={props.content[0].title} count={props.content[0].excercises} />
      <Part title={props.content[1].title} count={props.content[1].excercises} />
      <Part title={props.content[2].title} count={props.content[2].excercises} />
    </>

  )
}

const Total = (props) => {
  return (
    <p>Number of excercises: {props.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content content={[{ title: part1, excercises: exercises1 }, { title: part2, excercises: exercises2 }, { title: part3, excercises: exercises3 }]} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
