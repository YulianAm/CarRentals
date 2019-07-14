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
    


    [RoutePrefix("api/RentalDetails")]
    public class RentalDetailsController : ApiController
    {
        string username = Thread.CurrentPrincipal.Identity.Name;

        
        [HttpGet]
        [Route("find")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {

                    try
                    {
                        var rentalDetailsEntity = db.carRentalDetails.Select(p => new rentalDetailEntity()
                        {

                            id = p.id,
                            startDate = p.startDate,
                            returnDate = p.returnDate,
                            actualReturnDate = p.actualReturnDate,
                            userId = p.userId ?? 1,
                            carNumber = p.carNumber,
                        }).ToList();
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        response.Content = new StringContent(JsonConvert.SerializeObject(rentalDetailsEntity));
                        response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("applicatoin/json");
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


        // GET: api/RentalDetails/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("create")]
        public HttpResponseMessage create(carRentalDetail rentalDetailsEntity)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var rentalDetails = new carRentalDetail()
                        {
                            id = rentalDetailsEntity.id,
                            startDate = rentalDetailsEntity.startDate,
                            returnDate = rentalDetailsEntity.returnDate,
                            actualReturnDate = rentalDetailsEntity.actualReturnDate,
                            userId = rentalDetailsEntity.userId,
                            carNumber = rentalDetailsEntity.carNumber,
                        };

                        db.carRentalDetails.Add(rentalDetails);
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
        public HttpResponseMessage update(carRentalDetail rentalDetails)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {
                    try
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        var currentRental = db.carRentalDetails.SingleOrDefault(p => p.carNumber == rentalDetails.carNumber);

                        currentRental.id = rentalDetails.id;
                        currentRental.startDate = rentalDetails.startDate;
                        currentRental.returnDate = rentalDetails.returnDate;
                        currentRental.actualReturnDate = rentalDetails.actualReturnDate;
                        currentRental.userId = rentalDetails.userId;
                        currentRental.carNumber = rentalDetails.carNumber;
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
        [Route("delete/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            using (var db = new rentcarsEntities())
            {
                if (BasicAuthenticationAttribute.GlobalIsAdmin)
                {

                    try
                    {

                        var response = new HttpResponseMessage(HttpStatusCode.OK);

                        var rentalDetail = db.carRentalDetails.SingleOrDefault(p => p.id == id);
                        db.carRentalDetails.Remove(rentalDetail);
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

