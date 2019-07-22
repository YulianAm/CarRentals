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
    [RoutePrefix("api/branches")]
    public class BranchController : ApiController
    {
        // GET: api/Branch
        [HttpGet]
        [Route("find")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new rentcarsEntities())
            {

                try
                {

                    var branchEntitiesOriginal = db.branches.ToList();


                    var branchEntities = branchEntitiesOriginal.Select(p => new BranchEntity()
                    {
                        id = p.id,
                        Branchaddress = p.Branchaddress,
                        BranchName = p.BranchName,
                        locationX = int.Parse(p.locationX.ToString()),
                        locationY = int.Parse(p.locationY.ToString()),
                    });


                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new StringContent(JsonConvert.SerializeObject(branchEntities));
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("applicatoin/json");
                    return response;

                }
                catch (Exception e)
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
        }



        // GET: api/Branch/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Branch
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Branch/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Branch/5
        public void Delete(int id)
        {
        }
    }
}
