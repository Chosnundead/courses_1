class Table:
    table = []

    def __init__(self):
        for i in range(3):
            self.table.append([0, 0, 0])
        pass

    def show(self):
        print("\nv 012")
        for i in range(3):
            print(i, "|",sep="", end="")
            for j in range(3):
                if self.table[i][j] == 0:
                    print("_", end="")
                elif self.table[i][j] == 1:
                    print("X", end="")
                else:
                    print("O", end="")
            print("|")
        print()
        pass

    def endCheck(self):
        whoWin = 0
        for i in range(3):
            sum = 0
            for j in range(3):
                sum += self.table[i][j]
            if sum == 3:
                whoWin = 1
            elif sum == -3:
                whoWin = -1
        for j in range(3):
            sum = 0
            for i in range(3):
                sum += self.table[i][j]
            if sum == 3:
                whoWin = 1
            elif sum == -3:
                whoWin = -1
        if (self.table[0][0] + self.table[1][1] + self.table[2][2]) == 3:
            whoWin = 1
        elif (self.table[0][0] + self.table[1][1] + self.table[2][2]) == -3:
            whoWin = -1
        if (self.table[0][2] + self.table[1][1] + self.table[2][0]) == 3:
            whoWin = 1
        elif (self.table[0][2] + self.table[1][1] + self.table[2][0]) == -3:
            whoWin = -1
        return whoWin
