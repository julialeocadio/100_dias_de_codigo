#09/16/2024

def addition(x,y):
    return x+y

def subtraction(x,y):
    return x-y

def division(x,y):
    return x/y

def multiplication(x,y):
    return x*y

def calculator():
    print("Select the operation:")
    print("1.Addiction")
    print("2.Subtraction")
    print("3.Division")
    print("4.Multiplication")

while True:
    choice = input("choose 1/2/3/4): ")
    if choice in ('1','2','3','4'):
        x = int(input("Enter the first number: "))
        y = int(input("Enter the second number: "))
        if choice == '1':
            print(f"The answer is {addition(x,y)}")
        if choice == '2':
            print(f'The answer is {subtraction(x,y)}')
        if choice == '3':
            if y != 0:
                print(f'The answer is {division(x,y)}')
            else:
                print('value was invalid')
        if choice == '4':
            print(f'The answer is {multiplication(x,y)}')
    else:
        print("Invalid input")