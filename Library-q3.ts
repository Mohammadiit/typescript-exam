interface LendingItems {
    name : string;
    borrowingDurationInWeeks : number;
    isAnyOneWaiting : boolean;
    lendTo : Member;
    lastLendingtime;
}

class Items implements LendingItems {
    name ; 
    borrowingDurationInWeeks ; 
    isAnyOneWaiting;
    lendTo : Member;
    lastLendingtime;
    itemType;

    constructor(borrowingDurationInWeeks: number, name: string, itemType: string) { 
        this.itemType = itemType;
        this.name = name;
        this.borrowingDurationInWeeks = borrowingDurationInWeeks;
    }
    
    applyForItem (member : Member)
    {
        if (this.lendTo == null){
            this.lendTo = member;
            this.lastLendingtime = new Date();
        }
        else {
            this.isAnyOneWaiting = true;
        }
    }
}

public class Memeber {
    email : string;
    numberOfItemsBorrowed : number;
    fine : number;
}

