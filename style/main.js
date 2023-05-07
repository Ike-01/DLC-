


// change the navbar on scroll

// note that window-scroll is a class
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})



var n = Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December');

var d = new Date();

var date = d.getDate();
var day = d.getDay();
var monthindex = d.getUTCMonth();

var year = d.getFullYear();
var monthname = n[d.getUTCMonth()];
var monthweek = (0 | d.getDate() / 7) + 1;

// document.getElementById("#dem").innerHTML = "Year: " + year + " Month: " + monthname + " Week: " + monthweek;

// var mwk = Math.ceil((date - 1 - day) / 7) + 1;



const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

const openNav = () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}



const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



const sidebar = document.querySelector('aside');
const ShowsidebarBtn = document.querySelector('#show_sidebar-btn');
const HidesidebarBtn = document.querySelector('#hide_sidebar-btn');

const Showsidebar = () => {
  sidebar.style.left = '0';
  ShowsidebarBtn.style.display = 'none';
  HidesidebarBtn.style.display = 'inline-block';
}


const Hidesidebar = () => {
  sidebar.style.left = '-100%';
  ShowsidebarBtn.style.display = 'inline-block';
  HidesidebarBtn.style.display = 'none';
}

ShowsidebarBtn.addEventListener('click', Showsidebar);
HidesidebarBtn.addEventListener('click', Hidesidebar);



