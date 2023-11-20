import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTelevisions from "./helpers/soldTelevisions.js";
import originalStock from "./helpers/originalStock.js";
import toSell from "./helpers/toSell.js";
import returnBestSellingTv from "./helpers/returnBestSellingTv.js";
import returnTvPrice from "./helpers/returnTvPrice.js";
import returnTvDimensions from "./helpers/returnTvDimensions.js";
import getTvTypeNames from "./helpers/getTvTypeNames.jsx";
import getSoldTvs from "./helpers/getSoldTvs.js";
import showAllTelevisions from "./helpers/showAllTelevisions.jsx";
import React from "react";
import returnAllBrands from "./helpers/returnAllBrands.jsx";

function App() {
    return <>
        <main className="inner-container">
            <h1>Tech it easy dashboard</h1>


            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="featured-dashboard-container">
                    <article className="dashboard-item field__green">
                        <p>Aantal verkochte producten</p>
                        <p>{soldTelevisions(inventory)}</p>
                    </article>
                    <article className="dashboard-item field__blue">
                        <p>Aantal ingekochte producten</p>
                        <p>{originalStock(inventory)}</p>
                    </article>
                    <article className="dashboard-item field__red">
                        <p>Aantal te verkopen producten</p>
                        <p>{toSell}</p>
                    </article>
                </div>
            </section>



            <section>
                <h2>Best verkochte tv</h2>
                <div className="best-selling-container">
                    <article className="tv-article">
                        <span className="tv-image">
                        <img src={bestSellingTv.sourceImg} alt="tv image"/>
                        </span>
                        <div className="tv-info">
                            <p className="tv-name">{returnBestSellingTv(bestSellingTv)}</p>
                            <p className="tv-price">{returnTvPrice(bestSellingTv.price)}</p>
                            <p className="tv-dimensions">{returnTvDimensions(bestSellingTv.availableSizes)}</p>
                            <p>[check-icon] wifi [not-icon] speech [check-icon] hdr [check-icon] bluetooth [not-icon] ambilight</p>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <h2>Beschikbare merken</h2>
                <ul>{returnAllBrands(inventory)}
                </ul>
            </section>

            <section>
                <h2>Alle televisies</h2>
             <span>
                <button className="button" type="button">Meest verkocht eerst</button>
                <button className="button" type="button">Goedkoopste eerst</button>
                <button className="button" type="button">Meest geschikt voor sport eerst</button>
                 </span>

                <div className="all-televisions-container">
                    {showAllTelevisions(inventory)}
                </div>
            </section>

                <section>
                <h2>Oefenen met array methodes</h2>
                <p>1a Hier alle tv-type namen{getTvTypeNames(inventory)}</p>
                <p>1b Hier alle tv's die uitverkocht zijn {getSoldTvs(inventory)}</p>
                <p>1c tv type NH3216SMART</p>
                <p>1d sport kijkers</p>
                <p>1e schermgrootte 65 inch en groter</p>
                <p>1f ambilight</p>
            </section>


        </main>

    </>
}

export default App
