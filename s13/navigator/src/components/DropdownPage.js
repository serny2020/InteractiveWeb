import Dropdown from "../components/Dropdown";
import { useState } from "react";


function DropdownPage() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', vlaue: 'blue'}
  ]

  return (
    <div className='flex'>
    <Dropdown options={options} selection={selection} onSelect={handleSelect}/>

    </div>)
}

export default DropdownPage;