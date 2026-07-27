"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(name, balance, type) {
        this.accountHolder = name;
        this.balance = balance;
        this.accountType = type;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Updated Balance:", this.balance);
    }
    displayAccount() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Type:", this.accountType);
    }
}
const account = new BankAccount("Nissy", 25000, "Savings");
account.displayAccount();
account.deposit(5000);
