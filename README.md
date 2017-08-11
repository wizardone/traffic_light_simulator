# traffic_light_simulator

To install the required npm packages (additional packages are used only
for testing):
```
npm install
```
To run the sequence:
```
npm start
```
To test the code:
```
npm test
```
###
Log for 30 minutes:
```
Green light for direction N/S
Yellow light running. Next direction: E/W
Green light for direction E/W
Yellow light running. Next direction: N/S
Green light for direction N/S
Yellow light running. Next direction: E/W
Green light for direction E/W
Yellow light running. Next direction: N/S
Green light for direction N/S
Yellow light running. Next direction: E/W
Green light for direction E/W
```

### Assumption
I consider the yellow light to run for 30 seconds only when switching
from green to red, as this seems to be an explicit condition (and not
when switching from red to green).
The starting green light direction is `N/S`.
I am not quite sure whether providing a log for 30 minutes means
providing a sample log or the traffic light needs to be restricted to 30
minutes only? I assume the former...
