import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sumExercises, currentPart) =>{
        return sumExercises += currentPart.exercises
    }, 0)
    return (
        <>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total sum={totalExercises} />
        </>

    )

}

export default Course