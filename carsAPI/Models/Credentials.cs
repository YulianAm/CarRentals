using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace carsAPI.Models
{
    public class Credentials
    {
        [Required(ErrorMessage = "no username") ]
        public string userName { get; set; }

        [Required(ErrorMessage = "no password")]
        public string userPassword { get; set; }


        public string role { get; set; }
    }
}