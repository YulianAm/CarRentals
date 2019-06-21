using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace carsAPI.Models
{
    public class userEntity
    {

        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string countryId { get; set; }
        public string userName { get; set; }
        public DateTime dateOfBirth { get; set; }
        public string gender { get; set; }
        public string email { get; set; }
        public string userPassword { get; set; }
        public string pathPhoto { get; set; }
        public Boolean isAdmin { get; set; }
        public Byte[] image { get; set; }

        

    }
}