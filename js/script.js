
const getAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advices = await res.json();

    document.getElementById("title").innerText = `ADVICE #${advices.slip.id}`;
    document.getElementById("description").innerText = `"${advices.slip.advice}"`;

}

getAdvice();
