public class Bank{
    private String accountHolder;
    private double balance;
    public Bank( String accountHolder, double balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public String getAccountHolder(){
        return accountHolder;
    }

    public double getBalance(){
        return balance;
    }

    public void deposit(double amount){
        balance = balance + amount;
        System.out.println(amount + " deposited. New balance: " + balance);
    }

    public void withdrawal(double amount) throws Exception{
        if (amount > balance) {
            throw new Exception("Insufficient funds!");
        }
        
        else{
            balance -= amount;
            System.out.println(amount + " withdrawn. New balance: " + balance);
        }
        
    }

    public void displayInfo() {
    System.out.println("Account Holder: " + accountHolder);
    System.out.println("Balance: " + balance);
    }

    public static void main(String[] args) {
        Bank acc = new Bank("Lee", 1000);

        acc.deposit(200);
        try{
            acc.withdrawal(300);
        }
        catch (Exception e){
            System.out.println("Error: " + e.getMessage());
        }

        acc.displayInfo();


        //acc.withdrawal(300); // this line keeps throwing error; why?
    }
}
