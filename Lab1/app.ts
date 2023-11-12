
enum Category {
    BusinessAnalyst = "Business analyst",
    Developer = "Developer",
    Designer = "Designer",
    QA = "QA",
    ScrumMaster = "Scrum master",
}

//task 1
console.log(`___TASK_1______`);

function getAllWorkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst, },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}

function logFirstAvailable(workers: { name: string, surname: string, available: boolean, salary: number }[] = getAllWorkers()): void {
    console.log(`Number of workers in the array: ${workers.length}`);
    for (const worker of workers) {
        if (worker.available) {
            console.log(`Name and surname of the available worker: ${worker.name} ${worker.surname}`);
            return; // Виведемо інформацію про першого доступного робітника та завершимо функцію.
        }
    }
}

const workers = getAllWorkers();
logFirstAvailable(workers);

//task 2
console.log(`___TASK_2______`);

function getWorkersNamesByCategory(workers: { name: string, surname: string, available: boolean, salary: number, category: Category }[],
    category: Category = Category.Designer): Array<string> {
    let filteredWorkers = workers.filter(worker => worker.category == category);
    let surnames: Array<string> = [];
    filteredWorkers.forEach(worker => {
        surnames.push(worker.surname)
    });
    return surnames;
}

function logWorkersNames(workerNames: string[]): void {
    console.log("Worker names:");
    for (const name of workerNames) {
        console.log(name);
    }
}

logWorkersNames(getWorkersNamesByCategory(workers, Category.QA));

//task 3
console.log(`___TASK_3______`);

workers.forEach(worker => {
    if (worker.category == Category.Developer) {
        console.log(`Name and surname of the developer: ${worker.name} ${worker.surname}`);
    }
});


function getWorkerByID(id: number) {
    const workers = getAllWorkers();
    const worker = workers.find((worker) => worker.id === id);
    if (worker) {
        return { name: worker.name, surname: worker.surname, salary: worker.salary, available: worker.available };
    } else {
        return null;
    }
}

const workerInfo = getWorkerByID(2);
if (workerInfo) {
    console.log(`Name: ${workerInfo.name}`);
    console.log(`Surname: ${workerInfo.surname}`);
    console.log(`Salary: ${workerInfo.salary}`);
} else {
    console.log('Worker with the specified ID not found.');
}


//task 4
console.log(`___TASK_4______`);

function createCustomerID(name: string, id: number): string {
    return name + id.toString();
}

const myID: string = createCustomerID("Ann", 10);
console.log(myID);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name, id) => name + id.toString();

const generatedID: string = IdGenerator("Ann", 10);
console.log(generatedID);

//task 5
console.log(`___TASK_5______`);

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer's name: ${name}`);
    if (age != undefined) {
        console.log(`Age: ${age}`);
    }
    if (city != undefined) {
        console.log(`City: ${city}`);
    }
}

createCustomer("Ivan");
createCustomer("Petro", 20);
createCustomer("Vasyl", 25, "Kyiv");

logWorkersNames(getWorkersNamesByCategory(workers));

logFirstAvailable();




function checkoutWorkers(customer: string, workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const availableWorkers: string[] = [];

    workerIDs.forEach(id => {
        const workerInfo = getWorkerByID(id);
        if (workerInfo && workerInfo.available) {
            availableWorkers.push(`${workerInfo.name} ${workerInfo.surname}`);
        }
    });

    return availableWorkers;
}

const selectedWorkerIDs = [1, 2, 4];
const myWorkers = checkoutWorkers('Ann', selectedWorkerIDs);

myWorkers.forEach(worker => {
    console.log(`Worker : ${worker}`);
});