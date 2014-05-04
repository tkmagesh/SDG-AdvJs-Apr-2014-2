using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaskManagerApp.Models
{
    public class Task
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool isCompleted { get; set; }
    }
}