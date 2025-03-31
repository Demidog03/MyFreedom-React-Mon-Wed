import logo from '@assets/images/spotify-logo.png'
import classes from './Header.module.scss'

function Header() {
    const links = [
        {
            label: 'Google',
            href: 'https://www.google.com/'
        },
        {
            label: 'Discord',
            href: 'https://discord.com/'
        },
        {
            label: 'Steam',
            href: 'https://store.steampowered.com/'
        },
        {
            label: 'Epic Games',
            href: 'https://store.epicgames.com/'
        },
        {
            label: 'Youtube',
            href: 'https://www.youtube.com/'
        },
    ]

    const aTags = links.map((link, index) => {
        return <a key={index} className={classes.navlink} href={link.href} target='_blank'>{link.label}</a>
    })

    console.log(links)
    console.log(aTags)

    return (
        <header className={classes.header}>
            <img className={classes['header-logo']} src={logo} alt="header-logo" />
            <nav className={classes.nav}>
                {aTags}
            </nav>
            <button className={classes['signin-btn']}>Sign-in</button>
        </header>
    )
}

export default Header
