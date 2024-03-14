import ReactDOM from 'react-dom';
import React from 'react';
import "./index.css";

class AddTask extends React.Component{
  constructor(props){
    super(props);
    this.state={
      taskDesc:''
    }
  }
  handleTaskTextChange(e){
    this.setState({
      taskDesc:e.target.value
    })
  }

  handleAddTaskClick(){
    this.props.handlerToCollectTaskInfo(this.state.taskDesc);
    this.setState({
      taskDesc:''
    })
  }

  render(){
    return (
      <form>
        <input type="text"  value={this.state.taskDesc} onChange={(e)=> this.handleTaskTextChange(e)}/>
        <input type="button" value="Add Task" onClick={()=>this.handleAddTaskClick()}/>
      </form>
    );
  }
}

class TaskList extends React.Component{
  //   constructor(props){
  //   super(props);
  // }

  handleTaskClick(taskDesc){
    this.props.handlerToCollectTaskClickInfo(taskDesc);
  }

  render(){
    let list=[];
    for(let i=0;i<this.props.tasks.length;i++)
    {
      let task=this.props.tasks[i];
      let spanAction;
      if(task.isFinished)
      {
        spanAction=(
          <span className="material-icons" onClick={()=> this.handleTaskClick(task.desc)} >close</span>
        );
      }
      else{
        spanAction=(
          <span className="material-icons" onClick={()=> this.handleTaskClick(task.desc)} >done</span>
        );
      }
      let listItem=(
        <div key={i}>
          <span>{task.desc}</span>
          {spanAction}
          </div>
      );
      list.push(listItem);
    }
    return (
      <div className={this.props.forStyling}>
        <div className="list-container">
          <div className="title">{this.props.purpose}</div>
      <div className='content'>
        {list}
      </div>
      </div>
      </div>
    );
  }
}

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      tasks:[
        // {
        //   desc:'switch off light',
        //   isFinished:false
        // },
        // {
        //   desc:'Turn on fan',
        //   isFinished:true
        // },
        // {
        //   desc:'make tea',
        //   isFinished:false
        // },
        // {
        //   desc:'make dinner',
        //   isFinished:true
        // },

        // {
        //   desc:'switch off light',
        //   isFinished:false
        // },
        // {
        //   desc:'Turn on fan',
        //   isFinished:true
        // },
        // {
        //   desc:'make tea',
        //   isFinished:false
        // },
        // {
        //   desc:'make dinner',
        //   isFinished:true
        // },

        // {
        //   desc:'switch off light',
        //   isFinished:false
        // }
      ]
    }
  }

  handleNewTask(taskDesc){
    let oldTasks=this.state.tasks.slice();
        oldTasks.push({
      desc:taskDesc,
      isFinished:false
    });
    this.setState({
      tasks:oldTasks
    })
  }

  handleTaskStatusUpdate(taskDesc,newStatus){
    let oldTasks=this.state.tasks.slice();

    let taskItem=oldTasks.find(ot=>ot.desc==taskDesc);
    taskItem.isFinished=newStatus;

    this.setState({
      tasks:oldTasks
    })
  }

  render(){
    let tasks=this.state.tasks;
    let todoTasks=tasks.filter(t=>t.isFinished==false);
    let doneTasks=tasks.filter(t=>t.isFinished==true);

    return (
      <>
      <div className='add-task'>
        <AddTask handlerToCollectTaskInfo={(taskDesc)=>this.handleNewTask(taskDesc)}/>
        </div>
        <div className='task-lists'>
        <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc,true)} tasks={todoTasks} purpose="To do Tasks"  forStyling="to-do" />
        <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc,false)} tasks={doneTasks} purpose="Finished Tasks"  forStyling="finished"/>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />,document.getElementById("root"));

















// // import ReactDOM from 'react-dom';
// // import React from 'react';
// import './index.css';
// // class AddTask extends React.Component{
// //   render(){
// //     return(
// //     <form>
// //       <input type="text"  />
// //       <input type="button" value="Add Task" />
// //     </form>
// //     );
// //   }
// // }

// // class TaskList extends React.Component{
// //   render(){
// //     let list=[];
// //     for(let i=0;i<this.props.tasks.length;i++)
// //     {
// //       let task=this.props.tasks[i];
// //       let listItem=(
// //         <li key={i}>
// //         <span>{task.desc}</span>
// //         </li>
// //       );
// //       list.push(listItem);
// //       }

// //     return(
// //       <div className={this.props.forStyling}>
// //       <div>{this.props.purpose}</div>
// //       <ul>
// //       {list}
// //       </ul>
// //       </div>
// //     )
// // }
// // }

// // class App extends React.Component{
//   // constructor(props){
//   //   super(props);

//   //   this.state={
//   //     tasks:[
//   //       {
//   //         desc:"switch off light",
//   //         isFinished:false
//   //       },
//   //       {
//   //         desc:"Turn on fan",
//   //         isFinished:true
//   //       },
//   //       {
//   //         desc:"make tea",
//   //         isFinished:false
//   //       },
//   //       {
//   //         desc:"make dinner",
//   //         isFinished:true
//   //       }
//   //     ]
//   //   }
//   // }
// //   render(){
// //     let tasks=this.state.tasks;
// //     let todoTasks=tasks.filter(t=>t.isFinished  ==  false);
// //     let doneTasks=tasks.filter(t=>t.isFinished  ==  true);

// //     return(
// //     <>
// //       <div className="add-task">
// //       <AddTask/>
// //       </div>
// //       <div className="task-lists">
// //       <TaskList tasks= {todoTasks} purpose="Todo"  forStyling="todo"/>
// //       <TaskList tasks= {doneTasks} purpose="Finished"  forStyling="finished"/>
// //       </div>
// //     </>
// //     );
// //   }
// // }

// // ReactDOM.render(<App />,document.getElementById("root"));






















// import ReactDOM from 'react-dom';
// import React ,{useState} from 'react';
// import "./index.css";

// function InputBox(){
//   let [cValue,setValue]=React.useState("");
//   const setInputData=function(e){
//     setValue(e.target.value);
//   }
//   return(
//     <div>   
//        <input type="text" value={cValue}
//        onChange={setInputData} />
//        <button>Add Task</button>
//     </div> )
// }

// function ListItems(){
//   let [tasks, updatetasks]=React.useState(["hello","Hi","kaise ho"]);
//   return(
//     <ul>
//       {
//         tasks.map(function(task){
//           return <li>{task}</li>
//         })
//       }
//     </ul>
//   )
// }

// function Todo(){
//   return(
//     <div>
//       <h1>ToDo App</h1>
//       <InputBox></InputBox>
//       <ListItems></ListItems>
//     </div>
//   );
// }
// ReactDOM.render(<Todo />,document.getElementById("root"));




