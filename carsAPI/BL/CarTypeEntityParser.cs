using carsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace carsAPI.BL
{
    public static class CarTypeEntityParser
    {
        public static carTypeEntity castObje(carType carType)
        {
            carTypeEntity CarTypeObject = new carTypeEntity();


            CarTypeObject.manufacturer = carType.manufacturer;
            CarTypeObject.model = carType.model;
            CarTypeObject.dailyCost = carType.dailyCost;
            CarTypeObject.dailyPenalty = carType.dailyPenalty;
            CarTypeObject.gearType = carType.gearType;
            CarTypeObject.manufacturingYear = carType.manufacturingYear;


            return CarTypeObject;

        }
    }
}