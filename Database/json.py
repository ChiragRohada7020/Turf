import simplejson as json
data = [
    {
        "name": "Turf A",
        "region": "Region X",
        "slots": [
            {
                "slotId": "abc123",
                "time": "9:00 AM - 10:00 AM",
                "booked": False
            },
            {
                "slotId": "def456",
                "time": "10:00 AM - 11:00 AM",
                "booked": True
            },
        
        ]
    },
    {
        "name": "Turf B",
        "region": "Region Y",
        "slots": [
            {
                "slotId": "ghi789",
                "time": "1:00 PM - 2:00 PM",
                "booked": False
            },
            {
                "slotId": "jkl012",
                "time": "2:00 PM - 3:00 PM",
                "booked": False
            },
            
        ]
    },
    
]

json_data = json.dumps(data)

# Specify the path and filename for the JSON file
file_path = "insert.json"

# Write the JSON data to the file
with open(file_path, "w") as file:
    file.write(json_data)

print("JSON file created successfully.")
