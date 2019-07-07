using carsAPI.Classes;
using carsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace carsAPI.Controllers
{
    public class BasicAuthenticationAttribute : AuthorizationFilterAttribute
    {
        public static bool GlobalIsAdmin;

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if(actionContext.Request.Headers.Authorization == null)
            
            {

                actionContext.Response =
                    actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
            else
            {
                string authenticationToken = actionContext.Request.Headers.Authorization.Parameter;

                string decodedAuthenticationToken = Encoding.UTF8.GetString(Convert.FromBase64String(authenticationToken));

                string[] usernamePasswordArray = decodedAuthenticationToken.Split(':');
                string username = usernamePasswordArray[0];
                string password = usernamePasswordArray[1];

                //Login lg = new Login() { userName = username, userPassword = password };

                if (EmployeeSecurity.Login(username, password) && EmployeeSecurity.isAdmin(username) )
                {
                    // Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity("admin"), null);
                    //Thread.CurrentPrincipal  = new GenericPrincipal(new GenericIdentity("admin"), null);
                    GlobalIsAdmin = true;



                }           
                else
                {
                    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);


                

                }



            }




        }

        



    }
}