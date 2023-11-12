
interface PrizeLogger {
    (message: string): void;
}

interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    markPrize: PrizeLogger;
}


function getAllWorkers(): Worker[] {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, markPrize: () => { } },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, markPrize: () => { } },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, markPrize: () => { } },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, markPrize: () => { } }
    ];
    return workers;
}

// Функція getWorkerByID, яка використовує інтерфейс Worker
function getWorkerByID(workerID: number): Worker | undefined {
    const allWorkers = getAllWorkers();
    const foundWorker = allWorkers.find((worker) => worker.id == workerID);
    return foundWorker;
}

// Функція PrintWorker, яка використовує інтерфейс Worker
function PrintWorker(worker: Worker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

const allWorkers = getAllWorkers();
PrintWorker(allWorkers[1]);

//task 2
console.log(`___TASK_2______`);

// 3. Визначення змінної logPrize та створення функції, яка задовольняє інтерфейсу PrizeLogger
let logPrize: PrizeLogger;

function logPrizeFunction(message: string): void {
    console.log(`Prize logged: ${message}`);
}

logPrize = logPrizeFunction;
logPrize("You win!");

//task 3
console.log(`___TASK_3______`);

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

let favoriteAuthor: Author = {
    name: "Ann",
    email: "ann@mail.com",
    numBooksPublished: 10
};

/*let favoriteLibrarian: Librarian = {
    name: "John",
    email: "john@mail.com",
    department: "Reference",
    assistCustomer: (custName: string) => {
        console.log(`Assisting customer: ${custName}`);
    }
};*/

//task 4
console.log(`___TASK_4______`);

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const favouriteLibrarian: Librarian = new UniversityLibrarian();
favouriteLibrarian.name = "John";
favouriteLibrarian.assistCustomer("Ann");

//task 5
console.log(`___TASK_5______`);

abstract class ReferenceItem {
    //title: string;
    //year: number;
    /*constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log(`Creating a new ReferenceItem ...`);
    }*/

    abstract printCitation(): void;

    static department: string = 'Department';

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem ...');
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }
}

/*let ref = new ReferenceItem("The Road", 2006);
ref.printItem();

ref.publisher = "Pan Macmillan";
console.log(ref.publisher);*/

//task 6
console.log(`___TASK_6______`);

class Encyclopedia extends ReferenceItem {
    public edition: number;
    constructor(title: string, year: number, public newEdition: number) {
        super(title, year);
        this.edition = newEdition;
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

let refBook = new Encyclopedia("Encyclopedia of Ukraine", 2001, 1);
refBook.printItem();

refBook.printCitation();