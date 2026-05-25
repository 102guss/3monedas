const Course = ({title, description}: {title: string; description: string}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Course
