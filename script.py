import random
import json

dict = []
i = 0
while i < 35:
    number = random.randint(1000, 9999)
    name = "case(" + str(number) + ")" + ":"
    dict.append(name)
    print("success")
    i += 1

print("succes")

with open("number.json", "w") as json_file:
    json.dump(dict, json_file)