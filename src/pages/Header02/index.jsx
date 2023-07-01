
import './styles.scss'
import {iconlist} from "#assets/sourcemap/logolist"
const Header02 = () => {
    return <>
        <div className="header02">
            <Navbar />
        </div>
    </>
}

export default Header02

const Navbar = () => {
    const list = [
        {
            title: "Men",
            to: "##links",
            items: [
                {
                    title: "Men-item1",
                    to: "##links"
                },
                {
                    title: "Men-item2",
                    to: "##links"
                },
                {
                    title: "Men-item3",
                    to: "##links"
                },
                {
                    title: "Men-item4",
                    to: "##links"
                },
                {
                    title: "Men-item15",
                    to: "##links"
                }
            ]
        },
        {
            title: "Women",
            to: "##links",
            items: [
                {
                    title: "Women-item1",
                    to: "##links"
                },
                {
                    title: "Women-item2",
                    to: "##links"
                },
                {
                    title: "Women-item3",
                    to: "##links"
                },
                {
                    title: "Women-item4",
                    to: "##links"
                },
                {
                    title: "Women-item15",
                    to: "##links"
                }
            ]
        },
        {
            title: "Kids",
            to: "##links",
            items: [
                {
                    title: "Kids-item1",
                    to: "##links"
                },
                {
                    title: "Kids-item2",
                    to: "##links"
                },
                {
                    title: "Kids-item3",
                    to: "##links"
                },
                {
                    title: "Kids-item4",
                    to: "##links"
                },
                {
                    title: "Kids-item15",
                    to: "##links"
                }
            ]
        },
        {
            title: "Outdoor",
            to: "##links",
            items: [
                {
                    title: "Outdoor-item1",
                    to: "##links"
                },
                {
                    title: "Outdoor-item2",
                    to: "##links"
                },
                {
                    title: "Outdoor-item3",
                    to: "##links"
                },
                {
                    title: "Outdoor-item4",
                    to: "##links"
                },
                {
                    title: "Outdoor-item15",
                    to: "##links"
                }
            ]
        },

    ]
    return <div className="navbar">
        <div className='left'>
            <div className='logo'>
                <img src={iconlist.logo} alt="" />
            </div>
            <div className='navs'>
                {
                    list.map(item => <div className='navs-item'>
                        <div className='title'>{item.title}</div>
                    </div>)
                }
            </div>

        </div>
        <div className='right'>
            <div className='accounts'></div>

        </div>
    </div>
}