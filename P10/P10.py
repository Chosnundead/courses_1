n = 5 # Строк
m = 6 # Столбцов

def showTable(arr):
    for i in arr:
        for j in i:
            print(str(j), end="\t")
        print()
    pass

arr = [ [ 0 for j in range(m) ] for i in range(n) ]

counter = 1
rowR = 0
colR = m - 1
rowL = n - 1
colL = 0
while counter < n * m:
    for i in range(m):
        if arr[rowR][i] == 0:
            arr[rowR][i] = counter
            counter += 1
    rowR += 1
    for i in range(n):
        if arr[i][colR] == 0:
            arr[i][colR] = counter
            counter += 1
    colR -= 1
    for i in range(m - 1, -1, -1):
        if arr[rowL][i] == 0:
            arr[rowL][i] = counter
            counter += 1
    rowL -= 1
    for i in range(n - 1, -1, -1):
        if arr[i][colL] == 0:
            arr[i][colL] = counter
            counter += 1
    colL += 1

showTable(arr)