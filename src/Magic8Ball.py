import random

answer = ["Yes", "No", "Maybe", "Ask again later"]

input("What's your question?")
print(answer[random.randint(0, 4)])
