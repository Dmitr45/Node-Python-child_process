import argparse

parser = argparse.ArgumentParser(description="Приветствие пользователя") # Готовимся к приему аргументов
parser.add_argument("name", help="Имя пользователя") # Добавляем аргументы поочереди
parser.add_argument("age", help="Возраст") # Добавляем аргументы поочереди


args = parser.parse_args() # Объект аргументов вида args.name



print(f"Hello {args.name} ! I Python!")