class Employee:
    employee_names = []
    name = ''

    def __init__(self):
        self.employee_names = ["John Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"]

    def prompt(self):
        name = input("Enter an employee name to remove")
        for name in self.employee_names:
            print(name)
        self.remove(name)

    def remove(self, name):
        self.employee_names.remove(name)
        print("There are 4 employees")
        for name in self.employee_names:
            print(name)
