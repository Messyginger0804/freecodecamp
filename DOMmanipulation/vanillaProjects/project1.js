// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.when')

const quotes = [
    {
        quote: '"In critical moments, men sometimes see exactly what they wish to see."',
        when: 'Star Trek: The Original Series, Season 3, Episode 9, "The Tholian Web"',
    },
    {
        quote: '"After a time, you might find that having is not so pleasing, after all, as wanting. It is not logical, but it is often true."',
        when: 'Star Trek: The Original Series, Season 2, Episode 1 "Amok Time"',
    },
    {
        quote: '"Of course, I care, Leonard. I always assumed my respect for you was clear."',
        when: 'Star Trek Beyond',
    },
    {
        quote: '"Computers make excellent and efficient servants, but I have no desire to serve under them."',
        when: 'Star Trek: The Original Series, Season , Episode "The Ultimate Computer"',
    },
    {
        quote: '"Now does matter. What happened before no longer exists. What will happen next has not yet been written. We have only now."',
        when: 'Star Trek: Discovery Season 2, Episode 11 "Perpetual Infinity"',
    },
    {
        quote: '"Logic is the beginning of wisdom, not the end of it."',
        when: 'Star Trek VI: The Undiscovered Country',
    },
    {
        quote: '"I object to intellect without discipline, I object to power without constructive purpose."',
        when: 'Star Trek: The Original Series, Season 1, Episode 17 "The Squire of Gothos"',
    },
    {
        quote: '"Reverting to name-calling suggests that you are defensive and, therefore, find my opinion valid."',
        when: 'Star Trek Into Darkness',
    },
    {
        quote: '"They are brutal, savage, uncivilized, and illogical. They are in every way examples of Homo sapiens, the very flower of humanity."',
        when: 'Star Trek: The Original Series Season 2, Episode 4, "Mirror, Mirror"',
    },
    {
        quote: '"You refer to my human side as a handicap. Yet my mother is the most resilient, compassionate, tolerant person I have known. One who has been judged by Vulcans her entire life. And yet she stands by... For love, for family, for me. That is no handicap. That is true strength."',
        when: 'Star Trek: Strange New Worlds, Season 2, Episode 5 "Charades"',
    },
    {
        quote: '"Evil Does Seek To Maintain Power By Suppressing The Truth."',
        when: 'Star Trek: The Original Series Season 3, Episode 4 "And the Children Shall Lead"',
    },
    {
        quote: '"I could not deprive you of the revelation of all that you could accomplish together, of a friendship that will define you both in ways you cannot yet realize."',
        when: 'Star Trek "2009"',
    },
    {
        quote: '"I have been and always shall be your friend."',
        when: 'Star Trek II: The Wrath of Khan',
    },
    {
        quote: '"The needs of the many outweigh the needs of the few. Or the one."',
        when: 'Star Trek II: The Wrath of Khan',
    },
    {
        quote: '"Peace and long life. Live long and prosper."',
        when: 'Star Trek: The Original Series Season 2, Episode 1 "Amok Time," et al.',
    }
]

btn.addEventListener('click', function (e) {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    when.innerText = quotes[random].quote;
})