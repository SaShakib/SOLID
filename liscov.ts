class Bird{
    move() {
        return "Moving"; 
    }
}

class Sparrow extends Bird {
    move() {
        return "Flying";
    }
}

class Penguin extends Bird {
    move() {
        return "swimming"; 
    }
}

const allBirds: Bird[] = []
class BirdManager {
    add(bird: Bird) {
        allBirds.push(bird); 
    }
    move() {
        allBirds.forEach(bird => console.log(bird.move()))
    }
}

// const birds = [new Bird(), new Penguin(), new Sparrow()];



// birds.forEach((bird) => {
//     console.log(bird.move());
// })

const birdManager = new BirdManager(); 

birdManager.add(new Sparrow()); 
birdManager.add(new Penguin()); 

birdManager.move()