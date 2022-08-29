const questionNodes = document.querySelectorAll('.license__link');
const buyblockNode = document.querySelector('.buyblock');
const tooltipNode = document.querySelector('.tooltip');
const buyblockinnerNode = document.querySelector('.buyblock__inner');
const fixedbarNode = document.querySelector('.fixed-bar');
const dragbtnNode = document.querySelector('.fixed-bar__drag-btn');
const page = document.querySelector('.page');
let coords;

// listener for the question click
questionNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        e.preventDefault();
        buyblockNode.classList.toggle('buyblock--toltip-opened');
        coords = node.getBoundingClientRect();

        if ((window.matchMedia("(max-width: 768px)").matches)) {
            tooltipNode.style.left = (buyblockinnerNode.getBoundingClientRect().left + 56) + "px";
            tooltipNode.style.top = (coords.top - 148) + "px";
        }
        else {
            tooltipNode.style.left = (coords.left + 35) + "px";
            tooltipNode.style.top = (coords.top - 56) + "px";
        }
    });
});

// Toggle tooltip
tooltipNode.addEventListener('click', (e) => {
    if (buyblockNode.classList.contains('buyblock--toltip-opened')) {
        buyblockNode.classList.toggle('buyblock--toltip-opened');
    }
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

window.addEventListener('scroll', (e) => {
    if ((isScrolledIntoView(buyblockNode))) {
        fixedbarNode.classList.remove('fixed-bar--visible');

    }
    else {
        if (window.pageYOffset > buyblockNode.getBoundingClientRect().y) {
            fixedbarNode.classList.add('fixed-bar--visible');
        }
    }
});

// Click on drag btn
dragbtnNode.addEventListener('click', function () {
    fixedbarNode.classList.toggle('fixed-bar--open');
    page.classList.toggle('page--overlay');
});