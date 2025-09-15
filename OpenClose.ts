interface Payment {
  processPayment(amount);
}

class Paypal implements Payment {
  processPayment(amount) {
    console.log(`Payment is processed by Paypal ${amount}`);
  }
}

class Cash implements Payment {
  processPayment(amount) {
    console.log(`Payment is processed by Cash ${amount}`);
  }
}

class PaymentManager {
  amount: Number;
  registry: Map<string, Payment> = new Map();

  register(name: string, payment: Payment) {
    this.registry.set(name, payment);
    console.log(`✅ Registered payment method: ${name}`);
  }
  unregister(name: string) {
    if (this.registry.get(name)) {
      this.registry.delete(name);
      console.log(`❌ Unregistered payment method: ${name}`);
    } else {
      console.log(`⚠️ Payment method '${name}' not found.`);
    }
  }
  processAll(amount: Number) {
    this.registry.forEach((payment, key) => {
      payment.processPayment(amount);
    });
  }
}

const cash = new Cash();
const paypalPayment = new Paypal();

const paymentProcessor = new PaymentManager();
paymentProcessor.register("Cash", cash);
paymentProcessor.register("paypal", paypalPayment);

paymentProcessor.processAll(200)