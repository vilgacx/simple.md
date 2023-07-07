const i = document.querySelector('textarea');
i.addEventListener('input', () => { document.querySelector('span').innerHTML = marked.parse(i.value) });
