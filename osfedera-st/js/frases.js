function getDayBlockquote() {
    const blockquotes = [
        {
            "frase": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
            "autor": "Tenório Figueiredo"
        },
        {
            "frase": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            "autor": "Chiquinho do Acordeon"
        },
        {
            "frase": "Preciso de 10 pra passar :)",
            "autor": "Tácio de Souza Campos"
        },
        // Nova Frase
        // {
        //     "frase": "",
        //     "autor": ""
        // },
    ]

    const number = Math.floor(Math.random() * blockquotes.length)

    return blockquotes[number]
}

document.addEventListener('DOMContentLoaded', () => {
    let fraseDia = getDayBlockquote()
    document.querySelector('.frase').textContent = fraseDia.frase
    document.querySelector('.frase-autor').textContent = fraseDia.autor
})