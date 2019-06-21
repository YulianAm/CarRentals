using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace carsAPI.Models
{
    public class carTypeEntity
    {
        public int id { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }
        public double dailyCost { get; set; }
        public double dailyPenalty { get; set; }
        public DateTime manufacturingYear { get; set; }
        public string gearType { get; set; }
    }
}