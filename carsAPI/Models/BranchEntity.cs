using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace carsAPI.Models
{
    public class BranchEntity
    {
        public int id { get; set; }
        public string BranchName { get; set; }
        public string Branchaddress { get; set; }
        public int locationX { get; set; }
        public int locationY { get; set; }
    }
}