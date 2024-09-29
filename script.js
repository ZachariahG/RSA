


const main = () => {

    const growMe = document.getElementById('grow-me');
    growMe.classList.add('big');

    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');

    const listItems = document.querySelectorAll('ol li');
    listItems.forEach(item => {
        console.log(item.textContent);
    });

    const hideMe = document.getElementById('hide-me');
    hideMe.style.display = 'none';

    const showMe = document.getElementById('show-me');
    showMe.style.display = 'block';

    const name = document.getElementById('name').value;
    const heading = document.querySelector('h1');
    heading.textContent = `Welcome ${name}!`;

    const link = document.querySelector('a.link'); 
    link.href = 'https://www.example.com';
    link.textContent = 'somewhere';
}