export default function initToolTip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
        console.log(event);
        onMouseMove.tooltipBox = tooltipBox;
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
    }
}

const onMouseLeave = {
    handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
};

const onMouseMove = {
    handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
};

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}