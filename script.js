const text = document.querySelector('#fact')
const copyBtn = document.querySelector('.btn_copy')
const anotherBtn = document.querySelector('.btn_another')

copyBtn.addEventListener('click', copyContent)
anotherBtn.addEventListener('click', getFacts)

async function getFacts(){
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en', {mode: 'cors', method: 'GET'})
        const fact = await response.json()
        console.log(fact.text)
        text.innerHTML = fact.text
    } catch (error) {
        text.innerHTML = "<span class ='error'>Too many attempts. Try again later.</span>"
    }
    copyBtn.innerHTML = "Copy"
}

async function copyContent(){
    let text = document.querySelector('#fact')
    await navigator.clipboard.writeText(text.innerText)
    copyBtn.innerHTML = "Copied!"
}


getFacts();
