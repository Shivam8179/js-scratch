import requests

response = requests.get("https://api.flightapi.io/airline/6876731542e2aa2315bcda29?num=2459&name=AA&date=20250724")
print(response.json())