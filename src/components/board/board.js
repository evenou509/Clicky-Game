import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';


const charsArray = arr => (
    arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);


const initialChars = [
    {
        name: 'Kaka',
        img: 'img/Players/kaka.jpg',
        clicked: false
    },
    
    {
        name: 'Aguero',
        img: 'img/Players/Aguero.jpg',
        clicked: false
    },
    {
        name: 'Alexis Sanches',
        img: 'img/Players/alexis_sanchez.jpg',
        clicked: false
    },
    {
        name: 'David Beckham',
        img: 'img/Players/David-Beckham.jpg',
        clicked: false
    },
    {
        name: 'Kane',
        img: 'img/Players/Kane.jpg',
        clicked: false
    },
    {
        name: 'Kevin Debruyne',
        img: 'img/Players/kevin-de-bruyne.jpg',
        clicked: false
    },
    {
        name: 'Kylian Mbappe',
        img: 'img/Players/Mbappe.jpg',
        clicked: false
    },
    {
        name: 'Lion Messi',
        img: 'img/Players/Messi.jpg',
        clicked: false
    },
    {
        name: 'Mohamed Salah',
        img: 'img/Players/mohamed-salah.jpg',
        clicked: false
    },
    {
        name: 'Neymar Jr',
        img: 'img/Players/Neymar.jpg',
        clicked: false
    },
    {
        name: 'Christian Pulisic',
        img: 'img/Players/Pulisic.jpg',
        clicked: false
    },
    {
        name: 'Ronaldinho',
        img: 'img/Players/Ronaldinho.jpg',
        clicked: false
    },
    {
        name: 'Chirstino Ronaldo',
        img: 'img/Players/Ronaldo.jpg',
        clicked: false
    },
    {
        name: 'Lui Suarez',
        img: 'img/Players/Suarez.jpg',
        clicked: false
    },
    {
        name: 'Zinedine Zidane',
        img: 'img/Players/Zidane.jpg',
        clicked: false
    },
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: charsArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: charsArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            
        } else {
            this.setState({
                characters: charsArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every Soccer Player once. <br/>Try not to click the same Soccer Player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}

// export default class Board extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             user: {
//                 score: 0
//             },
//             characters: charsArray(initialChars)
//         };
//     }

//     onCharacterClick = (index) => {
//         if (!this.state.characters[index].clicked) {
//             this.setState({
//                 characters: charsArray(this.state.characters.map((character, current) => {
//                     return (current === index) ? { ...character, clicked: true } : character
//                 })),
//                 user: {
//                     ...this.state.user,
//                     score: this.state.user.score + 1
//                 }
//             });

//         } else {
//             this.setState({
//                 characters: charsArray(this.state.characters.map(character => { return { ...character, clicked: false } })),
//                 user: {
//                     ...this.state.user,
//                     score: 0
//                 }
//             });
//             //and shuffle
//         }
//     }

//     render(){
//         <div className="Board">
//            <FadeIn 
//                     in={true}
//                     duration={450}
//                     length={'30px'}
//                     direction={'bottom'}
//                     delay={'1s'}>
//                     <h4>Try to click on every NBA Player once. Once you click a player the grid will shuffle.<br/>Try not to click the same NBA Player twice or the game will start all over!</h4>
//                 </FadeIn> 
//         </div>
//     }

    
// };
