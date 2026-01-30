import { useState } from "react";
import "./App.css";

function App() {
  const sliders = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Frontend Developer",
      message:
        "This platform helped me understand React concepts very clearly.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Neha Patel",
      role: "UI Designer",
      message:
        "Clean UI and smooth experience. Loved working with these components!",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Full Stack Developer",
      message:
        "Reusable components and great design approach. Highly recommended.",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? sliders.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === sliders.length - 1 ? 0 : index + 1);
  };

  return (
    <div style={styles.container}>
      {sliders.map(
        (item, i) =>
          i === index && (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <h3>{item.name}</h3>
              <p style={styles.role}>{item.role}</p>
              <p>{item.message}</p>
            </div>
          ),
      )}

      <div style={styles.btnContainer}>
        <button onClick={prevSlide} style={styles.button}>
          Prev
        </button>
        <button onClick={nextSlide} style={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#86fddd7d",
    borderRadius: "10px",
    padding: "30px 40px",
    color: "#161616",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#acb6e575",
    borderRadius: "10px",
    padding: "30px 40px",

    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  role: {
    color: "gray",
    fontSize: "18px",
  },
  btnContainer: {
    marginTop: "15px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    inline: "none",
    backgroundColor: "#aeb8e5",
    color: "#161616",
    margin: "10px",
    cursor: "pointer",
  },
};

export default App;
