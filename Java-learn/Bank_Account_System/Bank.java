public class Bank{
    String accountHolder;
    double balance;
    public Bank( String accountHolder, double balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public void deposit(double amount){
        balance = balance + amount;
        System.out.println(amount + " deposited. New balance: " + balance);
    }

    public void withdrawal(double amount){
        
        if (amount <= balance){
            balance -= amount;
            System.out.println(amount + " withdrawn. New balance: " + balance);
        }
        else{
            System.out.println("Out of funds");
        }
    }

    public void displayInfo() {
    System.out.println("Account Holder: " + accountHolder);
    System.out.println("Balance: " + balance);
    }

    public static void main(String[] args) {
        Bank acc = new Bank("Lee", 1000);

        acc.deposit(200);
        acc.withdrawal(300);
    }
}
