import './App.css';
import {inventory} from "./constants/inventory.js";
import soldTelevisions from "./helpers/soldTelevisions.js";
import originalStock from "./helpers/originalStock.js";
import toSell from "./helpers/toSell.js";

function App() {
    return <>
        <section className="outer-container">
            <div className="inner-container">
            <h1>Tech it easy dashboard</h1>
            </div>
        </section>

        <section className="outer-container">

        <div className="sales-container">
            <div className="title-container">
                <h2>Verkoopoverzicht</h2>
            </div>
            <div className="featured-dashboard-container">
                <article className="field__green">
                    <p>Aantal verkochte producten</p>
                    <p>{soldTelevisions(inventory)}</p>
                </article>
                <article className="field__blue">
                    <p>Aantal ingekochte producten</p>
                    <p>{originalStock(inventory)}</p>
                </article>
                <article className="field__red">
                    <p>Aantal te verkopen producten</p>
                    <p>{toSell}</p>
                </article>
            </div>
        </div>
        </section>

    </>
}

export default App
