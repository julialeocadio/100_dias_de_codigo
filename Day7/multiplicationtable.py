#09/18/2024

def multiplication_table(num):
    print(f"Multiplication table of {num}")
    for i in range(1, 11):
        result = num * i
        print(f"{num} x {i} = {result}")

#ask user to insert number
num = int(input("Enter a number to receive a multiplication table: "))

#call function
multiplication_table(num)

