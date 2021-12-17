import { Component } from '@angular/core';


interface TaskEle {
  MainTask: string;
  desc: string;
  completed: boolean;
  timeReq: number;
  day: Number;
  person: string;
  underway: boolean;
  startTime: string;
  deadline?: number;
  requirements?: any[];
  startAnyTime?: boolean;
  expandStep?: boolean;
}

interface Task {
  p: string;
  title: string;
  timeRequired: number;
  steps: TaskEle[];
  stepsCompleted: number;
  completed: boolean;
  day: number;
  endTime: number;
  startTime?: string;
  details?: string[];
  requirements?: string[];
  completeAnymtime?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xmas 2021';

  task: Task;
  taskList: Task[] = [
    {
      p: "George",
      title: "Beef",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
          MainTask: "Beef",
          desc: "Vac-Pack Beef",
          completed: false,
          timeReq: 20,
          day: 1,
          person: "any",
          underway: false,
          startTime: "13:00"
        },
        {
          MainTask: "Beef",
          desc: "Sous-Vide Beef, 52deg 2h30",
          completed: false,
          timeReq: 150,
          day: 1,
          person: "any",
          underway: false,
          startTime: "13:20"
        },
        {
          MainTask: "Beef",
          desc: "Cool and Chill",
          completed: false,
          timeReq: 60,
          day: 1,
          person: "any",
          underway: false,
          startTime: "15:30"
        },
        {
          MainTask: "Beef",
          desc: "Sous-Vide Reheat 50deg, 40mins ",
          completed: false,
          timeReq: 30,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:00"
        },
        {
          MainTask: "Beef",
          desc: "Oven Sear, 220deg, 10 mins",
          completed: false,
          timeReq: 10,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:45"
        },
        {
          MainTask: "Beef",
          desc: "Carve to fine slices approx. 3 each",
          completed: false,
          timeReq: 10,
          day: 2,
          person: "any",
          underway: false,
          startTime: "14:00"
        },
      ],
      completed: false,
      day: 1,
      startTime: ""    },  //beef
    {
      p: "george",
      title: "Three-Bird Roast",
      timeRequired: 120,
      stepsCompleted: 0,
      endTime: 14,
      steps: [
        {
          MainTask: "Three-Bird Roast",
          desc: "Vac-Pack",
          completed: false,
          timeReq: 20,
          day: 1,
          person: "any",
          underway: false,
          startTime: "13:30"
        },
        {
          MainTask: "Three-Bird Roast",
          desc: "Sous-Vide @ 63deg for 2hours",
          completed: false,
          timeReq: 120,
          day: 1,
          person: "any",
          underway: false,
          startTime: "15:30"
        },
        {
          MainTask: "Three-Bird Roast",
          desc: "Cool and Chill",
          completed: false,
          timeReq: 60,
          day: 1,
          person: "any",
          underway: false,
          startTime: "17:30"
        },
        {
          MainTask: "Three-Bird Roast",
          desc: "Sous-Vide Reheat, 50deg 40m",
          completed: false,
          timeReq: 60,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:00"
        },
        {
          MainTask: "Three-Bird Roast",
          desc: "Oven sear at 220deg for 10 minutes",
          completed: false,
          timeReq: 10,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:45"
        },
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: ""    }, //three-Bird
    {
      p: "Dad",
      title: "Mash",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
          MainTask: "Mash",
          desc: "Peel, chop",
          completed: false,
          timeReq: 30,
          day: 1,
          person: "any",
          underway: false,
          startTime: "18:00"
        },
        {
          MainTask: "Mash",
          desc: "Boil",
          completed: false,
          timeReq: 40,
          day: 2,
          person: "any",
          underway: false,
          startTime: "12:50"
        },
        {
          MainTask: "Mash",
          desc: "Mash",
          completed: false,
          timeReq: 15,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:40"
        },
        {
          MainTask: "Mash",
          desc: "Store in slow cooker",
          completed: false,
          timeReq: 10,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:50"
        },
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: ""    }, //mash
    {
      p: "George",
      title: "Roasties",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
          MainTask: "Roasties",
          desc: "Peel and Chop",
          completed: false,
          timeReq: 30,
          day: 1,
          person: "any",
          underway: false,
          startTime: "18:00"
        },
        {
          MainTask: "Roasties",
          desc: "Parboil in stock",
          completed: false,
          timeReq: 10,
          day: 1,
          person: "any",
          underway: false,
          startTime: "18:30"
        },
        {
          MainTask: "Roasties",
          desc: "Cool and chill",
          completed: false,
          timeReq: 60,
          day: 1,
          person: "any",
          underway: false,
          startTime: "19:00"
        },
        {
          MainTask: "Roasties",
          desc: "Preheat oil",
          completed: false,
          timeReq: 10,
          day: 2,
          person: "any",
          underway: false,
          startTime: "12:40"
        },
        {
          MainTask: "Roasties",
          desc: "Roast at 200deg, 1h-1.20h",
          completed: false,
          timeReq: 130,
          day: 2,
          person: "any",
          underway: false,
          startTime: "13:00"
        }
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: ""    }, //roasties
    {
      p: "George",
      title: "Brussels, Garlic, Bacon",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
          MainTask: "Brussels, Garlic, Bacon",
          desc: "Crispen the bacon",
          completed: false,
          timeReq: 20,
          day: 1,
          person: "George",
          underway: false,
          startTime: "13:30"
        },
        {
          MainTask: "Brussels, Garlic, Bacon",
          desc: "Braise the brussels in wine, adding garlic and bacon",
          completed: false,
          timeReq: 40,
          day: 2,
          person: "George",
          underway: false,
          startTime: "13:15"
        },
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: ""    }, //Brussels, Garlic, Bacon
    {
      p: "George",
      title: "carrot Puree",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
               {
                MainTask: "Carrot Puree",
                desc: "Roast the butternut squash at 180",
                completed: false,
                timeReq: 40,
                day: 1,
                person: "George",
                underway: false,
                startTime: "13:30"
              },
              {
               MainTask: "Carrot Puree",
               desc: "Poach the carrots with time",
               completed: false,
               timeReq: 20,
               day: 1,
               person: "George",
               underway: false,
               startTime: "13:40"
             },
             {
              MainTask: "Carrot Puree",
              desc: "Blend carrots and squash together",
              completed: false,
              timeReq: 10,
              day: 1,
              person: "George",
              underway: false,
              startTime: "14:30"
            },
            {
             MainTask: "Carrot Puree",
             desc: "Reheat gently + keep warm",
             completed: false,
             timeReq: 20,
             day: 2,
             person: "George",
             underway: false,
             startTime: "13:30"
           },
            ],
      details: [""],
      completed: false,
      day: 1,
      startTime: "",
    }, //carrot Puree
    {
      p: "George",
      title: "Beef Gravy",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
         MainTask: "Beef Gravy",
         desc: "Brown shredded beef",
         completed: false,
         timeReq: 20,
         day: 1,
         person: "George",
         underway: false,
         startTime: "13:50"
         },
         {
          MainTask: "Beef Gravy",
          desc: "Veal jus and beef stock",
          completed: false,
          timeReq: 20,
          day: 1,
          person: "George",
          underway: false,
          startTime: "14:00"
        },
        {
         MainTask: "Beef Gravy",
         desc: "Reheat and keep warm",
         completed: false,
         timeReq: 20,
         day: 2,
         person: "George",
         underway: false,
         startTime: "13:30"
       },
      ],
      details: [""],
      completed: false,
      day: 1,      startTime: ""    }, //Beef Gravy
    {
      p: "George",
      title: "Turkey Gravy",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
         MainTask: "Turkey Gravy",
         desc: "Cook",
         completed: false,
         timeReq: 20,
         day: 1,
         person: "George",
         underway: false,
         startTime: "14:10"
       },
       {
        MainTask: "Turkey Gravy",
        desc: "Reheat and keep warm",
        completed: false,
        timeReq: 20,
        day: 2,
        person: "George",
        underway: false,
        startTime: "13:30"
      },
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: "",
    }, //turkey gravy
    {
      p: "George",
      title: "Stuffing",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
         MainTask: "Stuffing",
         desc: "Create Mixture and create circles",
         completed: false,
         timeReq: 20,
         day: 1,
         person: "George",
         underway: false,
         startTime: "15:30"
       },
       {
        MainTask: "Stuffing",
        desc: "Roast, 200deg, 30mins",
        completed: false,
        timeReq: 20,
        day: 2,
        person: "George",
        underway: false,
        startTime: "13:25"
      },
      ],
      details: [""],
      completed: false,
      day: 1,  startTime: ""    }, //Stuffing
    {
      p: "George",
      title: "Roast Yorkies",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
         MainTask: "Yorkies",
         desc: "Mix Batter and refrigerate",
         completed: false,
         timeReq: 20,
         day: 2,
         person: "George",
         underway: false,
         startTime: "11:00"
       },
       {
        MainTask: "Yorkies",
        desc: "Preheat oil",
        completed: false,
        timeReq: 10,
        day: 2,
        person: "George",
        underway: false,
        startTime: "13:20"
      },
       {
        MainTask: "Yorkies",
        desc: "Roast at 220 for 20 mins",
        completed: false,
        timeReq: 20,
        day: 2,
        person: "George",
        underway: false,
        startTime: "13:35"
      },
      ],
      details: [""],
      completed: false,
      day: 1, startTime: ""    }, //Yorkies
    {
      p: "George",
      title: "Pigs in Blankets",
      timeRequired: 120,
      endTime: 14,
      stepsCompleted: 0,
      steps: [
        {
         MainTask: "Pigs in Blankets",
         desc: "Roast at 200deg for 30-40mins",
         completed: false,
         timeReq: 40,
         day: 2,
         person: "George",
         underway: false,
         startTime: "13:10"
       },
      ],
      details: [""],
      completed: false,
      day: 1,
      startTime: ""} //Pigs in Blankets
  ]


  completedTasks: number = 0;

  selectedTask: Task = this.taskList[0]
  selectedTaskIndex: number = 0;

  expandedStep: boolean = false;

  mark_complete(t: Task):void {
    t.completed = !t.completed
  }

  gotoMainCard(i) {
    this.selectedTaskIndex = i
    this.selectedTask = this.taskList[i];
    let el = document.getElementById('mainCard');
    el.scrollTop = el.scrollHeight;
  }



  completedTaskCount(): number {
    let i = 0
    this.taskList.forEach(element => {
      if (element.completed == true) {
        i += 1;
      }
    });
    return i;
  }

  nextTask() {
    if (this.selectedTaskIndex == this.taskList.length -1) {
      this.selectedTask = this.taskList[0]
      this.selectedTaskIndex = 0
    }
    else {
      this.selectedTask = this.taskList[this.selectedTaskIndex+1]
      this.selectedTaskIndex +=1
    }
  }

  prevTask() {
    if (this.selectedTaskIndex == 0) {
      this.selectedTaskIndex = this.taskList.length - 1
      this.selectedTask = this.taskList[this.selectedTaskIndex]
    }
    else {
      this.selectedTaskIndex -= 1
      this.selectedTask = this.taskList[this.selectedTaskIndex]
    }
  }

  retTaskList() {
    return this.taskList
  }

  setStepComplete(ele) {
    ele.completed = !ele.completed;
    this.resetStepCount()
  }

  resetStepCount() {
    this.taskList.forEach(element => {
      let i = 0
      element.steps.forEach(e => {
        if (e.completed == true) {
          i += 1
        }
      });
      element.stepsCompleted = i
    });
  }

  expandStep(ele) {
   if(ele.expandStep != true) {
     ele.expandStep = true
   }
   else {
     ele.expandStep = false
   }
  }

  timelineSteps(d) {
    let arr = []
    this.taskList.forEach(element => {
      let i = 0
      element.steps.forEach(e => {
        if (e.day == d) {
          arr.push(e)
        }
      });
    })
    arr.sort((a, b) => a.startTime.localeCompare(b.startTime))
    return arr
  }

  setMainTaskStepComplete(ele) {
    this.taskList.forEach(element => {
      if (element.title == ele.MainTask) {
        element.steps.forEach(subElement => {
          if (subElement.desc == ele.desc) {
            subElement.completed = !subElement.completed
          }
        });
      }
    });
    this.resetStepCount()
  }


}
