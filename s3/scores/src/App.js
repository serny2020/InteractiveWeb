// use the ProfileCard component
import ProfileCard from "./ProfileCard";
// insert images
import iconOne from "./images/dice2@3x.png" 
import iconTwo from "./images/dice3@3x.png" 
import iconThree from "./images/dice4@3x.png"

//import bulma package for styling
import 'bulma/css/bulma.css'

function App() {
    {/* create the instance of the profile card component */}
    return (
        <div>
            <sectoin class="hero is-info">
                <div class="hero-body">
                    <p class="title">
                        A Simple Score Board
                    </p>
                </div>
            </sectoin>
            <div className="container">
                <section className="section">
                    
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                             name="user1" 
                             score="90" 
                             image={iconOne}
                             discription="user 1 earns the 2nd place prize!"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                             name="user2" 
                             score="86" 
                             image={iconTwo}
                             discription="user 2 earns the 3nd place prize!"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                             name="user3" 
                             score="92" 
                             image={iconThree}
                             discription="user 3 earns the 1st place prize!"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

// export the app component
export default App;