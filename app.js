class Counter
{
    constructor(element, value){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    this.increaseBtn.addEventListener('click',this.increase.bind(this));
    this.decreaseBtn.addEventListener('click',this.decrease.bind(this));
    this.resetBtn.addEventListener('click',this.reset.bind(this));
    }
    increase(){
        this.value++;
    this.valueDOM.textContent = this.value;
    }
    decrease(){
        this.value--;
    this.valueDOM.textContent = this.value;
    }
    reset(){
        this.value = 0;
    this.valueDOM.textContent = this.value;
    }
}


const firstCounter = new Counter(getElement(document.querySelector('.first-counter')),100);
const secondCounter = new Counter(getElement(document.querySelector('.second-counter')),200);

function getElement(element){
    if(element){
        return element;
    }
    throw new Error(`Sorry, no such element ${element} exist`);
}
console.log(firstCounter)
