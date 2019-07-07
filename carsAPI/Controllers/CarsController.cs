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
    [RoutePrefix("api/cars")]
    public class CarsController : ApiController
    {
        public static string ThreadUser = Thread.CurrentPrincipal.Identity.Name;
        
        // GET: api/cars
        [HttpGet]
        [Route("find")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new rentcarsEntities())
            {

                try
                {
                    var carsEntities = db.cars.Select(p => new carEntity()
                    {

                        carNumber = p.carNumber,
                        carType = p.carType ?? int.MinValue,
                        isAvailable = p.isAvailable,
                        isUndamaged = p.isUndamaged,
                        region = p.region,
                        mileage = p.mileage ?? int.MinValue,
                        image = p.image
                        


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

        // GET: api/Cars/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cars
        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create(carEntity carEntity)
        {
            using (var db = new rentcarsEntities())
            {
                if ( ThreadUser == "admin")
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var car = new car()
                        {
                            carNumber = carEntity.carNumber,
                            carType = carEntity.carType,
                            isAvailable = carEntity.isAvailable,
                            isUndamaged = carEntity.isUndamaged,
                            region = carEntity.region,
                            mileage = carEntity.mileage

                        };

                        db.cars.Add(car);
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

        // PUT: api/Cars/5
        [HttpPut]
        [Route("update")]
        public HttpResponseMessage update(carEntity car)
        {
            using (var db = new rentcarsEntities())
            {
                if (ThreadUser == "admin")
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentCar = db.cars.SingleOrDefault(p => p.carNumber == car.carNumber);
                        currentCar.carNumber = car.carNumber;
                        currentCar.carType = car.carType;
                        currentCar.isAvailable = car.isAvailable;
                        currentCar.isUndamaged = car.isUndamaged;
                        currentCar.region = car.region;
                        currentCar.mileage = car.mileage;
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

        // DELETE: api/Cars/5
        [HttpDelete]
        [Route("delete/{carNumber}")]
        public HttpResponseMessage Delete(string carNumber)
        {
            using (var db = new rentcarsEntities())
            {
                if (ThreadUser == "admin")
                {

                    try
                    {

                        var response = new HttpResponseMessage(HttpStatusCode.OK);

                        var car = db.cars.SingleOrDefault(p => p.carNumber == carNumber);
                        db.cars.Remove(car);
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