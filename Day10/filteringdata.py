#09/18/2024

import pandas as pd
import numpy as np

data = {
    'name': ['Ana', 'John', 'Mary', 'Peter', 'Lucas', 'Carly'],
    'department': ['IT', 'HR', 'IT', 'Finance', 'IT', 'HR'],
    'salary': [5000, 4500, 5200, 6000, 4800, 4700]
}

df = pd.DataFrame(data)

#filter by IT employees
it_employees = df[df['department'] == 'IT']
print(it_employees)

#calculate average salary
average_salary = it_employees['salary']. mean( )

#show result
print(f'Average salary from it department is {average_salary}')