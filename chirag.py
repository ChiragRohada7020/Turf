class MyClass:
    def __init__(self):
        pass

    def print_module_name(self):
        print(__name__)


my_object = MyClass()
my_object.print_module_name()
