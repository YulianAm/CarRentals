using carsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace carsAPI.BL
{
    public static class BranchEntityParser
    {
        public static BranchEntity castObje(branch br)
        {
            BranchEntity BrObj = new BranchEntity();

            BrObj.Branchaddress = br.Branchaddress;
            BrObj.BranchName = br.BranchName;
            BrObj.id = br.id;
            BrObj.locationX = int.Parse(br.locationX.ToString());
            BrObj.locationY = int.Parse(br.locationY.ToString());







            return BrObj;

        }
    }
}