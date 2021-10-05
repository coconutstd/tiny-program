import unittest
from unittest.mock import patch
from employee import Employee

class EmployeeTest(unittest.TestCase):

    def test_runs(self):
        emp = Employee()
        with patch('builtins.input', side_effect='John Smith'):
            emp.prompt()
            self.assertEqual(len(emp.employee_names), 4)


if __name__ == '__main__':
    unittest.main()
