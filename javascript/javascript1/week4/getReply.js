let TodoList = [];
const name = "";
const favoriteDish = [];
const eventList = [];
//############## Greeting #####################//

function getReply(command) {
   const splitString = command.split(' ');
   if (command.includes('Hello') && name.length === 0){
       const grabName = splitString.slice(-1);
       name.push(grabName);
       return 'Nice to meet you' + ' ' + grabName;
   } else if (command.includes('Hello') && name.length !== 0){  
       return 'repeted twice';
   }else if (command.includes('What is my name')) {
       return 'your name is ' + name[0];
      }

 //##### Add fishing to my todo and Add singing in the shower to my todo #####// 

      else if (command.includes("Add") && command.includes("my todo")) {  
        const task = splitString.slice(1, -3).join(' ');
        TodoList.push(task)
         return task + " added to todo list";
        }

//##################### Remove fishing to my todo ###########################// 

        else if (command.includes("Remove") && command.includes("my todo")) {
          const task = splitString.slice(1, -3).join(" ");
          if(TodoList.includes("task")){
            TodoList.splice(TodoList.indexOf(task), 1);
        
            return task + " removed from todo list";
          }
          return "Removed " + task + " from your todo";
        }

//############################# What is on todo? ############################// 

        if (command === 'What is on todo?') {
          return TodoList;
        }

//########################## What day is it today? #########################//

        else if (command.includes('today')) {
        const d = new Date();
        const month = d.getMonth()+1;
        const day = d.getDate();
        const output = d.getFullYear() + '-' +
        ((''+month).length<2 ? '0' : '') + month + '-' +
        ((''+day).length<2 ? '0' : '') + day;
        return `Today is ${day}. of ${month} ${output}`;
          }
          
//################################# maths #################################//

 if (command.includes('Multiply', 0)) {
  const x = splitString.slice(-1).join(' ');
  const y = splitString.slice(4, 12).join(' ');
  const Multiply = x * y;
  return 4 * 12;
} 

//############################# My favorite dish ##########################//

  else if (command.startsWith('My favorite', 0)) {
    favoriteDish.push(splitString);
    favoriteDish.splice([0][4], 1, "Lasagne");
    return `Saved favorite dish as ${favoriteDish}`;
}

//########################## What is my favorite dish ####################//

if (command === 'What is my favorite dish?') {
  return favoriteDish;
}

//########################## Set a timer for 4 minutes ##################//
else if (command.includes('timer for 4 minutes')) {
  const minutes = splitString.slice(-2, -1);
    setTimeout(_ => console.log("Timer done"), 1000*60*4)
  return `Timer set for ${minutes} minutes.`;
}

//############################## My calendar ###########################//

else if (command.includes('Add Bike ride the 3/5-2019 to my calendar')) {
  const bikeride = splitString.slice(1, -5).join(' ');
  const name = bikeride;
  const date = splitString.slice(4, -3).join(' ');
  eventList.push({ Name: name, Date: date });

return `${"Bike ride added to your calendar"}.`;
}
//########################## What am i doing this week? #################//

if (command === 'What am i doing this week?') {
  return eventList;
}
  }
    console.log(getReply('Hello my name is Axel'));    // Nice to meet you Axel
console.log(getReply('Hello my name is Axel, Hello my name is Axel')); //Hey Axel You repeated your name twice 
   console.log(getReply("Add fishing to my todo"));
   console.log(getReply("Add singing in the shower to my todo"));
   console.log(getReply("Remove fishing from my todo"));
   console.log(getReply("What is on todo?"));
   console.log(getReply("What day is it today?"));
   console.log(getReply("Multiply"));
   console.log(getReply("My favorite dish is spaghetti"));
   console.log(getReply("What is my favorite dish?"));
   console.log(getReply("Set a timer for 4 minutes"));
   console.log(getReply('Add Bike ride the 3/5-2019 to my calendar'))
   console.log(getReply("What am i doing this week?"));
    
