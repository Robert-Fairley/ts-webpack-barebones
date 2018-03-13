function Home() : void
{
    // Containers
    const counter:  HTMLElement = document.createElement('div');
    const count:    HTMLElement = document.createElement('div');
    const controls: HTMLElement = document.createElement('div');

    // Controls
    const btnIncr:  HTMLButtonElement = document.createElement('button');
    const btnDcr:   HTMLButtonElement = document.createElement('button');

    // Header
    const header:   HTMLElement = document.createElement('h1');

    // State
    this.state = { count: 0 };

    // Methods
    this.increaseCount = e => {
        this.state.count = this.state.count + 1;
        console.log('Increased ', this.state.count);
        count.innerText = this.state.count;
    };

    this.decreaseCount = e => {
        this.state.count = this.state.count - 1;
        console.log('Decreased ', this.state.count);
        count.innerText = this.state.count;
    };

    this.render = e => {
        console.log('Rendered Home Component');
        return counter;
    }

    // Setup
    counter.classList.add('counter');
    count.classList.add('count');
    controls.classList.add('count');

    btnIncr.addEventListener('click', this.increaseCount);
    btnDcr.addEventListener('click', this.decreaseCount);

    btnIncr.innerText = '++';
    btnDcr.innerText  = '--';

    header.innerText = 'Hello, World!';

    count.innerText = this.state.count;

    // Assemble
    controls.appendChild(btnIncr);
    controls.appendChild(btnDcr);

    counter.appendChild(header);
    counter.appendChild(count);
    counter.appendChild(controls);
}


export { Home }
