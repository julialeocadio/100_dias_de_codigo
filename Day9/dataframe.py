#09/18/2024

import pandas as pd
import numpy as np

data = {'vendas': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
df = pd.DataFrame(data)

mean1 = df['vendas'].mean( )
median1 = df['vendas'].median( )
std1 = df['vendas'].std( )
max1 = df['vendas'].max( )
min1 = df['vendas'].min( )

#results
print('Mean: ', mean1)
print('Median: ', median1)
print('Standard deviation: ', std1)
print('Max: ', max1)
print('Min: ', min1)


