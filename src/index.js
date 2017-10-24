"use strict";


class BankAccount {
    constructor(name, type, bvn = null) {
        this.name = name;
        this.account_type = type;
        this.bvn = this.genBvn(bvn);
        this.balance = 0.00;
        this.account_id = Math.floor(Math.random());
		this.accounts = "";
    }

    createAccount() {
        let new_account = {
            'account_id': this.account_id,
            'account_name': this.name,
            'account_type': this.account_type,
            'bvn': this.bvn
        };
        this.accounts.push(new_account);
        return this.accounts;
    }


    deposit(amount) {

        if (!amount) {
            return "Enter a valid deposit amount";
        }
        if (typeof (amount) === "number") {
            if (amount === 0) {
                return "Can't add 0 to account";
            } else {
                this.balance += amount;
                return this;
            }
        } else {
            return "Add a valid amount";
        }
    }

    checkBalance() {
        return this.balance;
    }

    genBvn(bvn) {
        if (bvn == null) {
            return Math.floor(Math.random());
        }
        return bvn;
    }


    withdraw(amount) {
        if (!amount) {
            return "Enter a valid withdrawal amount";
        }
        if (typeof (amount) === "number") {
            if (amount === 0) {
                return "Can't withdraw 0 from account";
            } else if (this.checkBalance() <= 500) {
                return "You can't withdraw below 500";
            } else {
                this.balance -= amount;
                return "Thank you for banking with us";
            }
            return 'balance :' + this.balance;
        } else {
            return "Add a valid amount";
        }
    }
}

class AtmCard extends BankAccount {

    constructor(name, account_type, bvn, card_type, currency, classification) {

        super(name, account_type, bvn);
        super.accounts = [];
        this.cardType = card_type;
        this.currency = currency;
        this.classification = classification;
    }

    credit(amount) {
        super.deposit(amount);
        return "your current balance is " + super.balance;
    }

    debit(amount) {
        super.withdraw(amount);
    }

}

export {
    BankAccount,
    AtmCard
};