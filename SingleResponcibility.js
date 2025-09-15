class ProcessOrder {
  constructor(order) {
    this.order = order;
  }

  processOrder() {
    console.log(`Order is processed ${this.order}`);
  }
}

class DatabaseProcess {
  constructor(order) {
    this.order = order;
  }

  saveToDb() {
    console.log(`Saved to DB ${this.order}`);
  }
}

class ErrorProcess {
 
  errors(message) {
    console.log(`Error is occured: ${message}`);
  }
}

const order = "order12"; 
const orderprocess = new ProcessOrder(order); 
orderprocess.processOrder()

const database = new DatabaseProcess(order);
database.saveToDb(); 

const errorHandler = new ErrorProcess(); 
errorHandler.errors("An error has occured"); 

