import {useEffect, useRef, useState} from 'react'
import {GoChevronDown} from "react-icons/go"
import Panel from './panel'

function Dropdown({options, selection, onSelect}) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            // console.log(event)
            // console.log(divEl.current)
            if (!divEl.current) {//check if there is a reference to the dropdown
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])


    const handleClick = () => {
        //change state base on the input
        setIsOpen((currentIsOpen) => !currentIsOpen)
        // setIsOpen(!isOpen) //simple version
    }
    const handleOptionClick = (option) => {
        setIsOpen(false) //close the options
        onSelect(option) //show the option
    }
    const renderedOptions = options.map((option) => {
        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" 
        onClick={() => handleOptionClick(option)} 
        key={option.value}>{option.label}
        </div>)
    })

    let content = 'Select..'
    if (selection) { //if there is a selection pass down
        content = selection.label
    }
    
    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel
            className="flex justify-between items-center cursor-pointer " 
            onClick={ handleClick}>{content}
            <GoChevronDown/>
            </Panel>
            {/* rerender the state base on the user input */}
            {isOpen && <Panel className='absolute top-full'>
                {renderedOptions}
            </Panel>}
        </div>)
}

export default Dropdown