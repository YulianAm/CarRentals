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
using carsAPI.BL;

namespace carsAPI.Controllers
{

    [RoutePrefix("api/cars")]
    public class CarsController : ApiController
    {


        // GET: api/cars
        [HttpGet]
        [Route("find")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new rentcarsEntities())
            {

                try
                {

                    var carsEntitiesOriginal = db.cars.ToList();


                    var carsEntities = carsEntitiesOriginal.Select(p => new carEntity()
                    {

                        carNumber = p.carNumber,
                        carType = p.carType ?? int.MinValue,
                        isAvailable = p.isAvailable,
                        isUndamaged = p.isUndamaged,
                        mileage = p.mileage ?? int.MinValue,
                        image = p.image,
                        carTypeObject = CarTypeEntityParser.castObje(p.carType1),
                        branchObject = BranchEntityParser.castObje(p.branch)


                    });


                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new StringContent(JsonConvert.SerializeObject(carsEntities));
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
                    return response;

                }
                catch (Exception e)
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
        }





        // GET: api/Cars/5
        [HttpGet]
        [Route("findById/{carNumber}")]
        public HttpResponseMessage ChangeIsAvailableById(string carNumber)
        {
            using (var db = new rentcarsEntities())
            {

                try
                {
                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    var carsEntitiesOriginal = db.cars.ToList();

                    var currentCar = carsEntitiesOriginal.Where(p => p.carNumber == carNumber).FirstOrDefault() ;

                    

                
                    response.Content = new StringContent(JsonConvert.SerializeObject(currentCar));
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");

                    return response;
                }
                catch
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }


            }
        }

        // POST: api/Cars
        [BasicAuthentication]
        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create(carEntity carEntity)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
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
                            //branch = carEntity.branch,
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
        //[BasicAuthentication]
        [HttpPut]
        [Route("update")]
        public HttpResponseMessage update(carEntity car)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentCar = db.cars.SingleOrDefault(p => p.carNumber == car.carNumber);
                        //currentCar.carNumber = car.carNumber;
                        //currentCar.carType = car.carType;
                        currentCar.isAvailable = car.isAvailable;
                        currentCar.isUndamaged = car.isUndamaged;
                        //currentCar.branch = car.branch;
                        //currentCar.mileage = car.mileage;
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

        [BasicAuthentication]
        [HttpPut]
        [Route("updateIsAvailableById/{carNumber}")]
        public HttpResponseMessage updateIsAvailableById(string carNumber )
        {
            using (var db = new rentcarsEntities())
            {
                
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentCar = db.cars.SingleOrDefault(p => p.carNumber == carNumber);



                        currentCar.isAvailable = false;
                        
                        
                        db.SaveChanges();
                        return response;
                    }
                    catch
                    {

                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    }
                
            }
        }

        // DELETE: api/Cars/5
        [BasicAuthentication]
        [HttpDelete]
        [Route("delete/{carNumber}")]
        public HttpResponseMessage Delete(string carNumber)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
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