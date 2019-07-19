using carsAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace carsAPI.Controllers
{
    [RoutePrefix("api/carTypes")]
    public class CarTypesController : ApiController
    {
        


        [HttpGet]
        [Route("find")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new rentcarsEntities())
            {

                try
                {
                    var carsEntities = db.carTypes.Select(p => new carTypeEntity()
                    {

                        id = p.id,
                        manufacturer = p.manufacturer,
                        model = p.model,
                        dailyCost = p.dailyCost,
                        dailyPenalty = p.dailyPenalty,
                        manufacturingYear = p.manufacturingYear,
                        gearType = p.gearType 


                    }).ToList();
                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new StringContent(JsonConvert.SerializeObject(carsEntities));
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("applicatoin/json");
                    return response;

                }
                catch
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
        }

        // GET: api/carTypes/5
        [HttpGet]
        [Route("findId")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create(carTypeEntity typeEntity)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var carType = new carType()
                        {
                            id = typeEntity.id,
                            manufacturer = typeEntity.manufacturer,
                            model = typeEntity.model,
                            dailyCost = typeEntity.dailyCost,
                            dailyPenalty = typeEntity.dailyPenalty,
                            manufacturingYear = typeEntity.manufacturingYear,
                            gearType = typeEntity.gearType
                        };

                        db.carTypes.Add(carType);
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

        [HttpPut]
        [Route("update")]
        public HttpResponseMessage update(carTypeEntity typeEntity)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentCarType = db.carTypes.SingleOrDefault(p => p.id == typeEntity.id);

                        currentCarType.id = typeEntity.id;
                        currentCarType.manufacturer = typeEntity.manufacturer;
                        currentCarType.model = typeEntity.model;
                        currentCarType.dailyCost = typeEntity.dailyCost;
                        currentCarType.dailyPenalty = typeEntity.dailyPenalty;
                        currentCarType.manufacturingYear = typeEntity.manufacturingYear;
                        currentCarType.gearType = typeEntity.gearType;
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

        [HttpDelete]
        [Route("delete/{carTypeId}")]
        public HttpResponseMessage Delete(int carTypeId)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {

                    try
                    {

                        var response = new HttpResponseMessage(HttpStatusCode.OK);

                        var carType = db.carTypes.SingleOrDefault(p => p.id == carTypeId);

                        db.carTypes.Remove(carType);
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
