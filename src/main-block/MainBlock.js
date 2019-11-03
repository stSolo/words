import React, { Component } from 'react';
import './main-block.css';

let words = [
    {
        word: "яблоко"
    },
    {
        word: "тушенка"
    },
    {
        word: "любовь"
    },
    {
        word: "морковь"
    },
    {
        word: "мама"
    },
    {
        word: "папа"
    },
    {
        word: "дочь"
    },
    {
        word: "пакет"
    },
    {
        word: "магазин"
    },
    {
        word: "семьч"
    },
    {
        word: "бабушка"
    },
    {
        word: "дедушка"
    },
    {
        word: "дом"
    },
    {
        word: "дух"
    },
    {
        word: "душ"
    },
    {
        word: "сын"
    },
    {
        word: "картофель"
    },
    {
        word: "котлета"
    },
    {
        word: "брат"
    },
    {
        word: "сестра"
    },
    {
        word: "соня"
    },
    {
        word: "катя"
    },
    {
        word: "красота"
    },
    {
        word: "чипсы"
    },
    {
        word: "лол"
    },
    {
        word: "конфета"
    },
    {
        word: "пирожок"
    },
    {
        word: "булочка"
    },
    {
        word: "швабра"
    },
    {
        word: "кукла"
    },
];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }


export default class MainBlock extends Component {
    constructor(props){
        super(props);
        this.state = {
            alphabet: [
                {
                    char: "а",
                    clicked: false
                },
                {
                    char: "б",
                    clicked: false
                },
                {
                    char: "в",
                    clicked: false
                },
                {
                    char: "г",
                    clicked: false
                },
                {
                    char: "д",
                    clicked: false
                },
                {
                    char: "е",
                    clicked: false
                },
                {
                    char: "ё",
                    clicked: false
                },
                {
                    char: "ж",
                    clicked: false
                },
                {
                    char: "з",
                    clicked: false
                },
                {
                    char: "и",
                    clicked: false
                },
                {
                    char: "й",
                    clicked: false
                },
                {
                    char: "к",
                    clicked: false
                },
                {
                    char: "л",
                    clicked: false
                },
                {
                    char: "м",
                    clicked: false
                },
                {
                    char: "н",
                    clicked: false
                },
                {
                    char: "о",
                    clicked: false
                },
                {
                    char: "п",
                    clicked: false
                },
                {
                    char: "р",
                    clicked: false
                },
                {
                    char: "с",
                    clicked: false
                },
                {
                    char: "т",
                    clicked: false
                },
                {
                    char: "у",
                    clicked: false
                },
                {
                    char: "ф",
                    clicked: false
                },
                {
                    char: "х",
                    clicked: false
                },
                {
                    char: "ц",
                    clicked: false
                },
                {
                    char: "ч",
                    clicked: false
                },
                {
                    char: "ш",
                    clicked: false
                },
                {
                    char: "щ",
                    clicked: false
                },
                {
                    char: "ъ",
                    clicked: false
                },
                {
                    char: "ы",
                    clicked: false
                },
                {
                    char: "ь",
                    clicked: false
                },
                {
                    char: "э",
                    clicked: false
                },
                {
                    char: "ю",
                    clicked: false
                },
                {
                    char: "я",
                    clicked: false
                },
            ],
            playerWord: [],
            currentWord: [],
            lives: 10,

        }
    }

    componentDidMount(){
        let n = getRandomInt(0, words.length);
        let w = words[n].word;
        console.log(w);
        let n_w = [];
        let p_w = [];
        for(let i = 0; i < w.length; i++){
            n_w.push(w[i]);
            p_w.push("_");
        };
        this.setState({ currentWord: n_w,
                        playerWord: p_w });
    }

    drawKeyBoard(){
        return [...this.state.alphabet.map(item => {
            return (<button
                    onClick = {this.checkChar.bind(this)}
                    value = {item.char}
                    disabled = {(item.clicked)}

                    key = {item.char}>{item.char}</button>)})]
    }

    checkChar(e){
        let char = e.currentTarget.value;
        let lives = this.state.lives;
        let c_w = this.state.currentWord;
        let p_w = this.state.playerWord;
        let newAlphabet = [...this.state.alphabet.map(
            item => {
                if(item.char === char){
                    item.clicked = true;
                }
                return item;
            }
        )]
        let indexesOfChar = [...c_w.reduce((a,item,i) => {
            if(char === item)
                a.push(i);
            return a;
        }, [])];
        if(indexesOfChar.length > 0){
            indexesOfChar.map((item) => {
                p_w[item] = char;
            })
        } else {
            lives = lives-1;
        }
        this.setState({ alphabet: newAlphabet, 
                        currentWord: c_w,
                        playerWord: p_w,
                        lives: lives});
        if(lives <= 0){
            this.gameStartAgain();
        }
        }
    
    drawWord(){
        let word = this.state.playerWord;
        return (
            word.map((char, index) => {
                return <div className = "char"
                key = {index}>{char}</div>
            })
        )
    }

    gameStartAgain(){
        let alphabet = [...this.state.alphabet.map(item => {
            item.clicked = false;
            return item;
        })];
        let n = getRandomInt(0, words.length);
        let w = words[n].word;
        console.log(w);
        let n_w = [];
        let p_w = [];
        for(let i = 0; i < w.length; i++){
            n_w.push(w[i]);
            p_w.push("_");
        };

        this.setState({ playerWord: p_w,
                        currentWord: n_w, 
                        alphabet: alphabet,
                        lives: 10})
    }


    render(){
        return (
            <div>
                {this.drawKeyBoard()}
                <div className = "word-container">
                    {this.drawWord()}
                </div>
                {this.state.lives}
                <div>
                    <button
                    title = "Еще!"
                    onClick = {this.gameStartAgain.bind(this)}>
                        Еще!
                    </button>
                </div>
            </div>
        )
    }
};