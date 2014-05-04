using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using TaskManagerApp.Models;

namespace TaskManagerApp.Controllers
{

    public class TaskServiceController : ApiController
    {
        private static List<Task> _tasks = new List<Task>()
        {
            new Task{id = 1, name ="Task 1", isCompleted =false},
            new Task{id = 2, name ="Task 2", isCompleted =false},
            new Task{id = 3, name ="Task 3", isCompleted =false},
        };

        // GET api/taskservice
        public IEnumerable<Task> Get()
        {
            Thread.Sleep(15000);
            return _tasks;
        }

        // GET api/taskservice/5
        public Task Get(int id)
        {
            return _tasks.FirstOrDefault(t => t.id == id);
        }

        // POST api/taskservice
        public Task Post(Task newTask)
        {
            var newId = _tasks.Count <= 0 ? 1 : _tasks.Max(t => t.id) + 1;
            newTask.id = newId;
            _tasks.Add(newTask);
            return newTask;
        }

        // PUT api/taskservice/5
        public Task Put(Task task)
        {
            var existingTask = _tasks.Find(t => t.id == task.id);
            existingTask.name = task.name;
            existingTask.isCompleted = task.isCompleted;
            return existingTask;
        }

        // DELETE api/taskservice/5
        public void Delete(int id)
        {
        }
    }
}
