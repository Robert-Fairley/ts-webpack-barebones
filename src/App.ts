/**
 * @function Home
 * @constructor
 * 
 * @desc When constructed instantiates a series of elements that build out to
 * a simple counter. The count is held in a state object which is accessed by
 * other methods. When the state object is altered, the UI element containing
 * a visual representation of the state is updated. This is all done explicitly
 * in this function.
 */
function Home() : void
{
    /****** Elements ******/

    // Containers
    const counter:  HTMLElement = document.createElement('div');
    const count:    HTMLElement = document.createElement('div');
    const controls: HTMLElement = document.createElement('div');

    // Controls
    const btnIncr:  HTMLButtonElement = document.createElement('button');
    const btnDcr:   HTMLButtonElement = document.createElement('button');

    // Header
    const header:   HTMLElement = document.createElement('h1');

    /****** State ******/

    this.state = { count: 0 };

    /****** Methods ******/

    /**
     * @method increaseCount
     * @param e<Event> - Native event object.
     * @desc Accesses the local state. Increases it by 1 and updates the UI accordingly.
     */
    this.increaseCount = e => {
        this.state.count = this.state.count + 1;     // Set the state to the current state + 1
        console.log('Increased ', this.state.count); // Log the change
        count.innerText = this.state.count;          // Update the UI element with the new count
    };

    /**
     * @method decreaseCount
     * @param e<Event> - Native event object.
     * @desc Accesses the local state. Decreases it by 1 and updates the UI accordingly.
     */
    this.decreaseCount = e => {
        this.state.count = this.state.count - 1;
        console.log('Decreased ', this.state.count);
        count.innerText = this.state.count;
    };

    /**
     * @method render
     * @param e<Event> - Native Event object.
     * @desc Returns the generated `counter` element containing all of the other
     * generated elements from within this function. This is used to append the
     * element to the HTML file calling for the application.
     */
    this.render = e => {
        console.log('Rendered Home Component');
        return counter;
    }

    /****** Setup ******/

     /**
     * Give the containers classes so they can be
     * styled or accessed explicitly by other functions.
     */
    counter.classList.add('counter');
    count.classList.add('count');
    controls.classList.add('count');

    /**
     * Add event listeners to the increase and decress buttons.
     * This associates the above defined methods with each button.
     */
    btnIncr.addEventListener('click', this.increaseCount);
    btnDcr.addEventListener('click', this.decreaseCount);

    /**
     * Add clear labelling to the buttons.
     */
    btnIncr.innerText = '++';
    btnDcr.innerText  = '--';

    /**
     * Our heading message
     */
    header.innerText = 'Hello, World!';

    /**
     * Display the initial state of the function
     */
    count.innerText = this.state.count;

    /****** Assemble ******/

    /**
     * Elements are added to containers in a specific order.
     * Note that they are appended, so they are added to the
     * respective container element in the order the `appendChild`
     * function is called here.
     */
    controls.appendChild(btnIncr);
    controls.appendChild(btnDcr);

    counter.appendChild(header);
    counter.appendChild(count);
    counter.appendChild(controls);
}


export { Home }
