using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace carsAPI.Classes
{
    public class EmployeeSecurity
    {

        public static bool Login(string userName, string password)
        {
            using (var db = new rentcarsEntities())

            {
                return db.users.Any(user =>
               user.userName.Equals(userName, StringComparison.OrdinalIgnoreCase) && user.userPassword == password );





            }
        }


        public static bool isAdmin(string userName)
        {
            using (var db = new rentcarsEntities())

            {
                return db.users.Any(user =>
               user.userName.Equals(userName, StringComparison.OrdinalIgnoreCase) && user.isAdmin == true);






            }
        }







    }
}