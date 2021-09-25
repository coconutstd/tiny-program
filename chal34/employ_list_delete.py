employee_names = ["John Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"]

for name in employee_names:
    print(name)

name = input("Enter an employee name to remove")
employee_names.remove(name)
print("There are 4 employees")
for name in employee_names:
    print(name)