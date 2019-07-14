using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using carsAPI.Models;
using Newtonsoft.Json;
using carsAPI.Controllers;

namespace carsAPI.Controllers
{
    [BasicAuthentication]
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {

        //public static string ThreadUser = Thread.CurrentPrincipal.Identity.Name;
        // GET: api/Users

        [HttpGet]
        [Route("find")]
        public HttpResponseMessage find()
        {
           

            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {

                        var userEntities = db.users.Select(p => new userEntity()
                        {
                            id = p.id,
                            firstName = p.firstName,
                            lastName = p.lastName,
                            countryId = p.countryId,
                            userName = p.userName,
                            dateOfBirth = p.dateOfBirth ?? DateTime.Today,
                            gender = p.gender,
                            email = p.email,
                            userPassword = p.userPassword,
                            isAdmin = p.isAdmin ?? false,
                            image = p.image

                        }).ToList();
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        response.Content = new StringContent(JsonConvert.SerializeObject(userEntities));
                        response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("applicatoin/json");



                        //var x = db.users.AsQueryable(); return x.ToList();
                        return response;



                    }
                    catch
                    {

                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    }
                }

               else
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                   

                }

            }


        }

        // GET: api/Users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create(userEntity userEntity)
        {
            using (var db = new rentcarsEntities())

            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        DateTime date1 = new DateTime(2015, 12, 25);
                        var response = new HttpResponseMessage(HttpStatusCode.OK);

                        var user = new user()
                        {
                            id = userEntity.id,
                            firstName = userEntity.firstName,
                            lastName = userEntity.lastName,
                            countryId = userEntity.countryId,
                            userName = userEntity.userName,
                            dateOfBirth = userEntity.dateOfBirth,
                            gender = userEntity.gender,
                            email = userEntity.email,
                            userPassword = userEntity.userPassword,
                            isAdmin = userEntity.isAdmin


                        };

                        db.users.Add(user);
                        db.SaveChanges();
                        return response;

                    }
                    catch (Exception)
                    {

                        return new HttpResponseMessage(HttpStatusCode.BadRequest);

                    }
                }

                else
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);

                }

            }

        }

        // PUT: api/Users/5
        [HttpPut]
        [Route("update")]
        public HttpResponseMessage update(userEntity user)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentUser = db.users.SingleOrDefault(p => p.id == user.id);
                        currentUser.id = user.id;
                        currentUser.firstName = user.firstName;
                        currentUser.lastName = user.lastName;
                        currentUser.countryId = user.countryId;
                        currentUser.userName = user.userName;
                        currentUser.dateOfBirth = user.dateOfBirth;
                        currentUser.gender = user.gender;
                        currentUser.email = user.email;
                        currentUser.userPassword = user.userPassword;
                        db.SaveChanges();
                        return response;
                    }
                    catch
                    {

                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    }
                }


            else
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
        }

        // DELETE: api/Users/5
        [HttpDelete]
        [Route("delete/{userId}")]
        public HttpResponseMessage Delete(int userId)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {

                    try
                    {

                        var response = new HttpResponseMessage(HttpStatusCode.OK);

                        var user = db.users.SingleOrDefault(p => p.id == userId);
                        db.users.Remove(user);
                        db.SaveChanges();
                        return response;

                    }
                    catch
                    {

                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    }
                }
                else
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
        }
    }
}

