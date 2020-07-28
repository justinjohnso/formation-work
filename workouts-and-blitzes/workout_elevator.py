# no constraints for upper and lower bounds 

class Elevator:
    # current floor: 4
    # enterLevel: 5, 1, 9, 6, 3
    # go: 5 6 9 3 1
    
    # [1, 3, 5, 6, 9]
    # [9, 6, 5, 3, 1]
    
    # upper: [5, 6, 9]
    # lower: [3, 1]
    # return upper + lower: [5, 6, 9, 3, 1]
    
    def __init__(self, currentFloor):
        self.currentFloor = currentFloor
        self.floors = {}
        self.direction = ""
        

    # LL: O(nlogn), O(n)
    # Array: O(nlogn)
    # logn + n + n
    # [1,3, 8, 6, 5]
    # midIndex = 2
    
    def enterLevel(self, level):
        if:
            self.upper.append(level)
            
        # populating upper / lower
        return
        

    def go(self):
        #sort upper, sort lower, then return
        
elevator = Elevator(4)
elevator.enterLevel(5)
elevator.enterLevel(1)
elevator.enterLevel(9)
elevator.enterLevel(6)
elevator.enterLevel(3)
print(elevator.go()) #[5, 6, 9, 3, 1]
