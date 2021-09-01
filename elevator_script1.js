var floor_num = 20;

var elevators = [1,2,3];
var elevatorOneFloor = 0;
var elevatorOneDirection = 0; // 0=down and 1=up

var elevatorTwoFloor = 0;
var elevatorTwoDirection = 0;

var elevatorThreeFloor = 0;
var elevatorThreeDirection = 0;



var marginArray = [];
marginArray[20] = 0;
marginArray[19] = 45;
marginArray[18] = 90;
marginArray[17] = 135;
marginArray[16] = 180;
marginArray[15] = 225;
marginArray[14] = 270;
marginArray[13] = 315;
marginArray[12] = 360;
marginArray[11] = 405;
marginArray[10] = 450;
marginArray[9] = 495;
marginArray[8] = 540;
marginArray[7] = 585;
marginArray[6] = 630;
marginArray[5] = 675;
marginArray[4] = 720;
marginArray[3] = 765;
marginArray[2] = 810;
marginArray[1] = 855;

var requestedQueue = [];
var elevator1_used_rank = 0;
var elevator2_used_rank = 0;
var elevator3_used_rank = 0;
// var requestedFloor = 0;
// var requestedFloorDirection = 0;

var myVar = null;

function orderElevator(floor,direction){
    this.requestedQueue.push({
        floor:floor,
        direction:direction
    });

    this.myVar = setInterval(this.queueProcess);
}


// var floor_difference = 0;  // floor difference = 45%;
// var limit = 810;  // 45 * 20 floor minus first and last floor;

function queueProcess()
{
    var queueLength = this.requestedQueue.length;
    if(queueLength == 0){
        clearInterval(this.myVar);
    } else {

        var elevatorOneResult = 0;
        var elevatorTwoResult = 0;
        var elevatorThreeResult = 0;
        var selectedElevetor = 0;

        this.requestedQueue.forEach((item,index)=>{

            elevatorOneResult = 0;
            elevatorTwoResult = 0;
            elevatorThreeResult = 0;
            selectedElevetor = 0;

            /* select elevator and it's direction */
            if(item.direction == this.elevatorOneDirection && elevatorOneResult > 0 && elevatorOneResult < elevatorTwoResult && elevatorOneResult < elevatorThreeResult)
            {
                selectedElevetor = 1;
            }
            else if(item.direction == this.elevatorTwoDirection && elevatorTwoResult > 0 && elevatorTwoResult < elevatorOneResult && elevatorTwoResult < elevatorThreeResult)
            {
                selectedElevetor = 2;
            }
            else if(item.direction == this.elevatorThreeDirection && elevatorThreeResult > 0 && elevatorThreeResult < elevatorOneResult && elevatorThreeResult < elevatorThreeResult)
            {
                selectedElevetor = 3;
            }
            else
            {
                selectedElevetor = this.elevators[Math.floor(Math.random()*this.elevators.length)];
            }

            if(selectedElevetor > 0)
            {
                if(selectedElevetor == 1)
                {
                    this.elevatorOneFloor = item.floor;
                    this.elevatorOneDirection = item.direction;
                    document.getElementById("elevator-one").style.marginTop = marginArray[item.floor]+"%";
                }
                else if(selectedElevetor == 2)
                {
                    this.elevatorTwoFloor = item.floor;
                    this.elevatorTwoDirection = item.direction;
                    document.getElementById("elevator-two").style.marginTop = marginArray[item.floor]+"%";
                }
                else if(selectedElevetor == 3)
                {
                    this.elevatorThreeFloor = item.floor;
                    this.elevatorThreeDirection = item.direction;
                    document.getElementById("elevator-three").style.marginTop = marginArray[item.floor]+"%";
                }

                this.requestedQueue.splice(index, 1);
            }

            console.log("elevatorOneResult elevatorTwoResult elevatorThreeResult");
            console.log(`${elevatorOneResult} ${elevatorTwoResult} ${elevatorThreeResult}`);
            console.log("elevatorOneFloor elevatorTwoFloor elevatorThreeFloor");
            console.log(`${elevatorOneFloor} ${elevatorTwoFloor} ${elevatorThreeFloor}`);
            console.log("elevatorOneDirection elevatorTwoDirection elevatorThreeDirection");
            console.log(`${elevatorOneDirection} ${elevatorTwoDirection} ${elevatorThreeDirection}`);

        });
    }
}