import time

def timer(func):
    def Wrapper(*args, **kwargs):
        start=time.time()
        result= func(*args, **kwargs)
        end=time.time()
        print(f"function '{func.__name__}' took{ end-start:.2f} seconds to run")
        return result
    return Wrapper


@timer
def slow_function():
    time.sleep(2)
    print("Done sleeping")

slow_function()