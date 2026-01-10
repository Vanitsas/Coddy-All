bill_amount = float(input("Enter the bill amount: "))
tip_percentage = float(input("Enter the tip percentage: "))
num_people = int(input("Enter the number of people to split the bill: "))

tip_amount = (tip_percentage / 100) * bill_amount
total_amount = bill_amount + tip_amount
per_person = total_amount / num_people

print("Bill Split Calculator")
print(f"Total (including tip): ${total_amount}")
print(f"Each person pays: ${per_person}")
