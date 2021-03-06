import React, { Component }  from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NomSingle from './NomSingle'
import WinnerSingle from './WinnerSingle'

import '../SASS/Nominated.sass';

// import {BrowserRouter as Router,Route, NavLink, Redirect} from 'react-router-dom';

const Nominated = (props) => {

        const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0()

        let log =   <div className='login'>
                        <h1 onClick={() => {
                            loginWithRedirect()
                        }
                            }>Log in</h1>
                    </div>

        let nom =   <div className='loggedin nombutton'>

                    </div>

        if (isAuthenticated) {
            log =   <div className='logout'>
                        <h2>{user.name} |</h2>
                        <h1 onClick={() => logout()}>Log out</h1>
                    </div>
            
            nom =  <div className='loggedin nombutton'>
                        <h1>Nominated</h1>
                        <button className='nominatedarrow' onClick={() => props.nominatedShow(user.sub.substring(6))}>›</button>
                    </div>
        }

        let orderMovies = props.winners.sort((x,y) => y.count - x.count)
          return (
            <footer className="nominatedContainer">
            <section>
                {nom}
                <h1 className='modal'>Congratulations! You Finished Nominating 5 Movies.</h1>
                {log}
            </section>
            <div className='nomGroup'>
            <div className='nominated'>
                {props.nominated.map((award) => {
                    return <NomSingle key={award.imdbID + award.Year} ID={award.imdbID} award={award} deleteNom={props.deleteNom} />
                })}
            </div>
            <div class='winnerGroup'>
            <h1 className='winnerButton'>Calculate Movie Winners</h1>
            <button className='nominatedWinnerArrow' onClick={() => props.allNominations()}>›</button>
            </div>

                <div className='nomWinners'>
                {orderMovies.map((winner) => {
                    return <WinnerSingle key={winner.imdbID} ID={winner.imdbID} winner={winner} deleteNom={props.deleteNom} />
                })}
                </div>
            </div>
            </footer>
        );
    

  }
  
  export default Nominated;