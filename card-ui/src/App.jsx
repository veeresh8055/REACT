import React from "react";
import Card from './components/Card.jsx';

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://i.pinimg.com/736x/89/73/d4/8973d4473f428cb78cca39f82c15af3e.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40 / hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55 / hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/17/37/37/173737d2e88db47fbba6b0d2270e4a4e.jpg",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50 / hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/89/0c/25/890c250fe129488a586b1a99e8b68107.jpg",
      companyName: "Infosys",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25 / hour",
      location: "Mysore, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/aa/a2/45/aaa245759726ab04e968b9bff4981a52.jpg",
      companyName: "TCS",
      datePosted: "2 weeks ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$18 / hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/03/1a/b1/031ab1329da9a72190cacb119eed906a.jpg",
      companyName: "Wipro",
      datePosted: "1 month ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$30 / hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg",
      companyName: "Flipkart",
      datePosted: "6 days ago",
      post: "Product Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45 / hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/736x/f5/63/9e/f5639ee4b71dc1acc79b1889f44662a5.jpg",
      companyName: "Paytm",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$35 / hour",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/1200x/f4/34/e3/f434e30f1c5a170fc4700661cc99c3ab.jpg",
      companyName: "Zomato",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$22 / hour",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://img.icons8.com/color/1200/byjus.jpg",
      companyName: "BYJU'S",
      datePosted: "3 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$38 / hour",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return (
          <Card
            key={index}
            logo={elem.brandLogo}
            company={elem.companyName}
            date={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
}

export default App;
