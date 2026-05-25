import Course from "./components/Course"
import Header from "./components/Header"


function App() {

  return (
    <>
      <h1>Estoy en mi proyecto 3 de monedas</h1>
      <Header />
      <Course
        title="Curso de React"
        description="Aprende React dede cero"
      />
      <Course
        title="Curso de TypeScript"
        description="Aprende TypeScript desde cero"
      />

      <Course
        title="Curso de Angular"
        description="Aprende Angular desde cero"
      />
      <Course
        title="Curso de Vue"
        description="Aprende Vue.js desde cero"
      />
    </>
  )
}

export default App
