import {GoBell, GoBeaker} from 'react-icons/go'
import Button from './Button'

function App() {
    const handleClick = () => {
        console.log('Clicked!');
      };
    return(
    <div>
        <div>
            <Button 
                secondary
                outline
                rounded
                className="mb-5"
                onClick={handleClick}
             >  
                <GoBell/>
                click me
            </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}>
            <GoBeaker />
                buy now
            </Button>
        </div>
        <div>
            <Button secondary>see deal</Button>
        </div>
        <div>
            <Button warning>hide ads</Button>
        </div>
        <div>
            <Button primary rounded>What's that?</Button>
        </div>
        <div>
            <Button primary>Something!</Button>
        </div>
    </div>)
}

export default App