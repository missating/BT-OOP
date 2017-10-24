import chai from 'chai';

import {
    BankAccount,
    AtmCard
} from '../src/index';


const expect = chai.expect;
const account = new BankAccount('nessa', 'current', 2);
const vanessa = new AtmCard('Vanessa', 'savings', null, 'debit', 'naira', 'master card');


describe('Test for BankAccount and AtmCard classes', () => {
    describe('BankAccount', () => {
        it('Should be an instance of BankAccount', () => {
            expect(account).to.be.an.instanceof(BankAccount);
        });
        it('Should not be an instance of AtmCard', () => {
            expect(account).to.not.be.an.instanceof(AtmCard);
        });

        it('Should have property name', () => {
            expect(account).to.have.a.property("name");
        });
        it('Should have a balance of 0', () => {
            expect(account.checkBalance()).to.equal(0);
        });
        it('Should not allow withdraw less than 500', () => {
            expect(account.withdraw(200)).to.equal("You can't withdraw below 500");
        });
        it('Should return balance after successful checkBalance', () => {
            expect(account.checkBalance()).to.be.a("number");
        });
        it('Should not have property credit', () => {
            expect(account).to.not.have.property("undefined");
        });
    });


    describe('Atm', () => {
        it('Should be an instance of BankAccount', () => {
            expect(vanessa).to.be.an.instanceof(BankAccount);
        });
        it('Should be an instance of AtmCard', () => {
            expect(vanessa).to.be.an.instanceof(AtmCard);
        });
        it('Should have property classification', () => {
            expect(vanessa).to.have.a.property("classification");
        });
        it('Should have Initialiazed bvn as null', () => {
            expect(vanessa.genBvn()).to.equal(0);
        });
        it('Should not allow empty withdrawal', () => {
            expect(vanessa.withdraw()).to.equal("Enter a valid withdrawal amount");
        });
        it('Should accept only numbers for withdrawal method', () => {
            expect(vanessa.withdraw("three")).to.equal("Add a valid amount");
        });
        it('Should accept only numbers for withdrawal method', () => {
            expect(vanessa.deposit({
                withdraw: 200
            })).to.equal("Add a valid amount");
        });
        it('Should not allow empty withdrawal', () => {
            expect(vanessa.withdraw()).to.equal("Enter a valid withdrawal amount");
        });
        it('Should not allow empty deposit', () => {
            expect(vanessa.deposit()).to.equal("Enter a valid deposit amount");
        });
        it('Should return an object after successful deposit', () => {
            expect(vanessa.deposit(200)).to.be.an('object');
        });
        it('Should return account balance after successful credit', () => {
            expect(vanessa.credit(1000)).to.equal('Your account has been credited, balance 1200');
        });
        it('Should return account balance after successful debit', () => {
            expect(vanessa.debit(200)).to.equal("balance: 1000");
        });
        it('Should be an instance of AtmCard and BankAccount', () => {
            expect(vanessa).to.be.an.instanceOf(AtmCard, BankAccount);
        });
    });

});