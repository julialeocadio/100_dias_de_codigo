#09/18/2024

def c_t_f(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

tempC = float(input("Enter the temperature in Celsius: "))

print(f'The temperature in Fahrenheit is {c_t_f(tempC)}')