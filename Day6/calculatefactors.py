#09/16/2024

def factor(n):
    if n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result
    
num = int(input("Enter a number: "))

if num < 0:
    print(f"The factorial of {num} does not exist")
else:
    print(f"The factorial of {num} is {factor(num)}")
