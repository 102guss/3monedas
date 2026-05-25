const Course = ({title, description}: CourseProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

interface CourseProps {
  title: string;
  description: string;
}

export default Course
