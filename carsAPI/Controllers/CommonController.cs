using carsAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace carsAPI.Controllers
{
    [RoutePrefix("api/common")]
    public class CommonController : ApiController
    {
        // GET: api/Common
        [HttpPost]
        [Route("findUserId")]
        public HttpResponseMessage Get(userName username)
        {
            using (var db = new rentcarsEntities())
            {

                try
                {

                    int userId = (from x in db.users
                                  where x.userName == username.un
                                  select x.id).SingleOrDefault();




                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new StringContent(JsonConvert.SerializeObject(userId));
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("applicatoin/json");



                    //var x = db.users.AsQueryable(); return x.ToList();
                    return response;



                }
                catch
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }

        }



        // GET: api/Common/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Common
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Common/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Common/5
        public void Delete(int id)
        {
        }
    }
}
