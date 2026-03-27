import heroImg from "../assets/Images/Settt.png";




function Home () {
    return (
        <div className="home">
            <div className="hero">
                <img src={heroImg} alt="Ruby Jewelry"/>


                <div className="hero-text">

                <h1>Welcome to </h1>
                <h2>Ruby   Jewelry</h2>
            
                
            <p>Luxury ruby accessories for your style</p>
            </div>
            </div>
            
            
        </div>
    );
}


export default Home;