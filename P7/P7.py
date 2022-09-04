import modules.Table as Table

table = Table.Table()

counter = 0; opportunity = 1
while(table.endCheck() == 0 and counter <= 8):
    table.show()
    while True:
        try:
            positionToDraw = int(input("position == "))
            while table.table[positionToDraw // 10][positionToDraw % 10] != 0:
                positionToDraw = int(input("position == "))
            table.table[positionToDraw // 10][positionToDraw % 10] = opportunity
            break
        except Exception:
            pass
    if opportunity == 1:
        opportunity = -1
    else:
        opportunity = 1
    counter += 1

table.show()
if table.endCheck() == 1:
    print("P1 win!")
elif table.endCheck() == -1:
    print("P2 win!")
else:
    print("Draw!")