harcamalar = []
print("Welcome to the Daily Expense Tracker!")
print()
print("Menu:")
print("1. Add a new expense")
print("2. View all expenses")
print("3. Calculate total and average expense")
print("4. Clear all expenses")
print("5. Exit")

while True:
    secim = input()
    if secim == "1":
        miktar = float(input())
        harcamalar.append(miktar)
        print("Expense added successfully!")
        
    elif secim == "2":
        if len(harcamalar) == 0:
            print("No expenses recorded yet.")
        else:
            print("Your expenses:")
            for i in range(len(harcamalar)):
                print(f"{i + 1}. {harcamalar[i]}")
    elif secim == "3":
        if len(harcamalar) == 0:
            print("No expenses recorded yet.")
        else:
            toplam = 0
            for h in harcamalar:
                toplam += h
            ortalama = toplam / len(harcamalar)
            print(f"Total expense: {toplam}")
            print(f"Average expense: {ortalama}")
    
    elif secim == "4":
        harcamalar.clear()
        print("All expenses cleared.")
   
    
    elif secim == "5":
        print("Exiting the Daily Expense Tracker. Goodbye!")
        break

        
    else:
        print("Invalid choice. Please try again.")


