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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content content={[{ title: part1.name, excercises: part1.exercises }, { title: part2.name, excercises: part2.exercises }, { title: part3.name, excercises: part3.exercises }]} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
