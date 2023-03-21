import './header.scss';

export function header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerText = 'Hello from webpack';
  const body = document.body;
  const gendalf = document.createElement('img');
  gendalf.classList.add('header__img');
  gendalf.src = '../pics/274px-Gandalf_the_White.jpg';
  header.append(gendalf);
  body.append(header);
}
