class Testing:
    @staticmethod
    def add(a,b):
        return a+b
    
    @staticmethod
    def subtract(a,b):
        return a-b
    
    @staticmethod
    def multiply(a,b):
        return a*b
    
    @staticmethod
    def division(a,b):
        if b != 0:
            return a/b
        else:
            raise ZeroDivisionError("Cannot divide by zero")