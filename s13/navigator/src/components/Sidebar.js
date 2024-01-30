import Link from './Link'

function Sidebar() {
    const links = [
        {lable: 'Dropdown', path: '/'},
        {lable: 'Accordion', path: '/accordion'},
        {lable: 'Buttons', path: '/buttons'}

    ]

    //creating different link components with map function
    const renderedLinks = links.map((link) => {
        return <Link key={link.lable} to={link.path}>{link.lable}</Link>
    })

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar 