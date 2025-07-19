from .calc import add 
from .calc import multiply
from .calc import division
from .calc import subtract
from calc import Testing  
import unittest

class TestCalc(unittest.TestCase):
    def test_add(self):
        self.assertEqual(Testing.add(2, 3), 5)
        self.assertEqual(Testing.add(-1, 1), 0)
        self.assertEqual(Testing.add(0, 0), 0)