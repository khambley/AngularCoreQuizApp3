﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    public class Credentials
    {
        public string Email { get; set; }
        public string Password { get; set; }

    }
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        readonly UserManager<IdentityUser> userManager;
        readonly SignInManager<IdentityUser> signInManager;
        public AccountController(UserManager<IdentityUser> userMgr, SignInManager<IdentityUser> signInMgr)
        {
            this.userManager = userMgr;
            this.signInManager = signInMgr;
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Credentials creds)
        {
            var user = new IdentityUser { UserName = creds.Email, Email = creds.Email };

            var result = await userManager.CreateAsync(user, creds.Password);

            if (!result.Succeeded)
                return BadRequest(result.Errors);

            await signInManager.SignInAsync(user, isPersistent: false);

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            //Create and return a JSON web token (JWT)
            var jwt = new JwtSecurityToken(signingCredentials: signingCredentials);
            return Ok(new JwtSecurityTokenHandler().WriteToken(jwt));
        }
    }
}
