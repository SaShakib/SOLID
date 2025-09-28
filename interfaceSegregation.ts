interface Swithable {
  turnon();
  turnoff();
}

interface Timer {
  setTimer(time: Number);
}

class Fan implements Swithable {
    turnon() {
        console.log("On")
    }
    turnoff() {
        console.log("Off");
    }
}

const fan = new Fan(); 
fan.turnon()