import owlJpg from '@assets/images/owl.jpg'
import classes from './Main.module.scss'

function Main() {
    return (
        <main className={classes.main}>
            <img className={classes.mainImage} src={owlJpg} alt="" />
            <h1 className={classes.title}>MAIN</h1>
        </main>
    )
}

export default Main
