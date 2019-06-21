using carsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace carsAPI.Controllers
{
    public class LoginController : ApiController
    {
        // GET: api/Login
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Login/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Login
        [Route("api/Login/createcontact")]
        [HttpPost]
        public object createcontact(Registration Lvm)
        {
            try
            {
                
                var db = new rentcarsEntities();
                user loginUser = new user();
                if (loginUser.id == 0)
                {
                    loginUser.firstName = Lvm.firstName;
                    loginUser.lastName = Lvm.lastName;
                    loginUser.userName = Lvm.userName;
                    loginUser.email = Lvm.email;
                    loginUser.dateOfBirth = Lvm.dateOfBirth;
                    loginUser.gender = Lvm.gender;
                    loginUser.userPassword = Lvm.userPassword;
                    loginUser.isAdmin = Lvm.isAdmin;
                    
                    db.users.Add(loginUser);
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }

        [Route("api/Login/UserLogin")]
        [HttpPost]
        public Response Login(Login Lg)
        {
            using (var db = new rentcarsEntities() ) {
                user currentUser;

                try
                {
                    currentUser = db.users.Where(x => x.userName == Lg.userName && x.userPassword == Lg.userPassword).FirstOrDefault();

                    if (currentUser != null)
                    {

                        if (currentUser != null && currentUser.isAdmin == true)
                        {

                            return new Response { Status = "success admin", Message = "admin" };
                        }

                        else if (currentUser != null && currentUser.isAdmin == false)
                        {
                            return new Response { Status = "success user", Message = "user" };
                        }
                        else
                            return new Response { Status = "fail", Message = "not valid user | pass" };



                    }
                    else { return new Response { Status = "failed", Message = "user or pass incorrect" }; }

                }
                catch (Exception)
                {
                    return new Response { Status = "failed", Message = "user/pass not valid" };
                    
                }


            }





        }

   


       [Route("api/Login/UserType")]
        [HttpPost]
        public Response Type(Login Lg)
        {
            using (var db = new rentcarsEntities())
            {
                user currentUser;

                try
                {
                    currentUser = db.users.Where(x => x.userName == Lg.userName && x.userPassword == Lg.userPassword && x.isAdmin == true).FirstOrDefault();

                    if (currentUser != null && currentUser.isAdmin == true)
                    {

                        return new Response { Status = "admin", Message = "admin" };
                    }

                    else if (currentUser != null && currentUser.isAdmin == false)
                    {
                        return new Response { Status = "user", Message = "user" };
                    }
                    else
                        return new Response { Status = "fail", Message = "not valid user | pass" };



                }
                catch (Exception)
                {

                    throw;
                }

              

            }





        }


        // PUT: api/Login/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Login/5
        public void Delete(int id)
        {
        }
    }
}
