// import {inject} from 'aurelia-framewok';
// import {EventAggregator} from 'aurelia-event-aggregator';

// @inject(EventAggregator)
export class Test {
    heading = 'This is a test page';
    firstName = '';
    lastName = '';
    salary = 0;
    previousValue = this.fullName;

    get fullName() {
        return `${this.firstName} ${this.lastName} `;
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }

    tryDelegate() {
        console.log('try delegate successful!');
    }

    constructor(EventAggregator) {
        this.EventAggregator = EventAggregator;
    }

    // publish() {
    //     var payload = {};
    //     this.EventAggregator.publish('myEventName', payload);
    // }

    // subscribe() {
    //     this.subscribe = this.EventAggregator.subscribe('myEventName', payload => {
    //         console.log(payload);
    //     });
    // }

    // dispose() {
    //     this.subscribe.dispose();
    //     console.log('Disposed!!!');
    // }


}

