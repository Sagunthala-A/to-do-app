import React from 'react'


const Header = () => {
  return (
    <header>
      <h3 style={{
        fontSize: "30px",
        backgroundImage: "radial-gradient(circle at 0.2% 0.5%, rgb(252, 165, 241) 0%, rgb(181, 255, 255) 100.2%)",
        // backgroundImage: "linear-gradient(to top, rgb(252, 165, 241), rgb(181, 255, 255))",
        color: "transparent", 
        fontWeight: "600",
        textShadow: "2px 2px 30px white",
        WebkitBackgroundClip: "text",
        marginBottom: "1.5rem",
      }}>TO DO APP</h3>

{/* <h3 style={{fontSize:"30px",
    backgroundImage: "linear-gradient(110.9deg, rgb(159, 131, 216) 2.6%, rgb(27, 245, 241) 100.2%)"
}}>TO DO APP</h3> */}

{/* <h3 style={{
    fontSize: "30px",
    backgroundImage: "radial-gradient(circle at 0.2% 0.5%, rgb(252, 165, 241) 0%, rgb(181, 255, 255) 100.2%)",
    WebkitBackgroundClip: "text",
    color: "transparent", 
    fontWeight: "600",
    textShadow:"2px 2px 20px 2px black"
}}>TO DO APP</h3> */}
    </header>
  )
}



export default Header