
function App() {
  let doctor = {
    name: "veeresh",
    special: "Neuro sergen",
    experience: 10,
    hospital: "AIIMS",
    city :'gadag',
    sal:100000000,
    ward : 1000 
  }

  let values = Object.entries(doctor);

  return (
    <>
      {
      values.map((el, i) => (
        <h1 key={i}>{el[0]}  :  <span>{el[1]}</span></h1>
      ))}
    </>
  )
}

export default App
